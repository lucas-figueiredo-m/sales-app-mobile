import { HttpService } from '../../Http';
import { database as watermelondb } from '@salesapp/database';
import {
  synchronize,
  SyncPullArgs,
  SyncPushArgs,
} from '@nozbe/watermelondb/sync';
import {
  DatabaseChangeSet,
  SyncPullParams,
  SyncPullResult,
  SyncPushParams,
  TableChangeSet,
  Tables,
} from '@salesapp/types';

class DatabaseClass {
  constructor(private http: typeof HttpService) {}
  database = watermelondb;

  async sync() {
    await synchronize({
      database: this.database,
      pullChanges: args => this.pullChanges(args),
      pushChanges: args => this.pushChanges(args),
      migrationsEnabledAtVersion: 1,
    });
  }

  private processPullChanges({
    changes,
    timestamp,
  }: SyncPullResult): SyncPullResult {
    const keys = Object.keys(changes) as Tables[];

    const refactoredChanges = keys.reduce<DatabaseChangeSet>((prev, curr) => {
      const item = changes[curr];

      // TODO: fix typo error
      const created = item.created.map(created => ({
        ...created,
        created_at: new Date(created.created_at).getTime(),
        updated_at: new Date(created.updated_at).getTime(),
      }));

      const updated = item.updated.map(created => ({
        ...created,
        created_at: new Date(created.created_at).getTime(),
        updated_at: new Date(created.updated_at).getTime(),
      }));

      const entry: TableChangeSet<any> = {
        created,
        updated,
        deleted: item.deleted,
      };

      return { ...prev, [curr]: entry };
    }, {});

    return { changes: refactoredChanges, timestamp };
  }

  private async processPushChanges() {
    return;
  }

  private async pullChanges({
    lastPulledAt,
    migration,
    schemaVersion,
  }: SyncPullArgs): Promise<SyncPullResult> {
    const params = {
      lastPulledAt,
      schemaVersion,
      migration,
    };

    const res = await this.http.get<SyncPullResult, SyncPullParams>('/sync', {
      params,
    });
    // const { changes, timestamp } = res;
    console.log('[TEST: ]', JSON.stringify(res.changes));
    const { changes, timestamp } = this.processPullChanges(res);
    return { changes, timestamp };
  }
  private async pushChanges({
    changes,
    lastPulledAt,
  }: SyncPushArgs): Promise<void> {
    const params = {
      lastPulledAt,
    };
    await this.http.post<DatabaseChangeSet, void, SyncPushParams>(
      '/sync',
      changes,
      { params },
    );
    this.processPushChanges();
  }
}

export const DatabaseService = new DatabaseClass(HttpService);
