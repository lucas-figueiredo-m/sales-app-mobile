import withObservables, { ObservableifyProps } from '@nozbe/with-observables';

// TODO: fix this typo
import { Client as ClientDB } from 'models';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ClientService } from '@salesapp/services';
import { styles } from './styles';

interface Props {
  client: ClientDB[];
}

type InputProps = ObservableifyProps<Props, 'client'>;

export const ClientCardToObserve: React.FC<Props> = ({ client }) => {
  const onDelete = async (id: string) => {
    try {
      await ClientService.delete(id);
    } catch (error) {
      console.log('Error: ', JSON.stringify(error));
    }
  };

  return (
    <>
      {client.map((cli, index) => (
        <View key={index} style={styles.root}>
          <View>
            <Text>
              <Text>Client name: </Text>
              <Text>{cli.socialName}</Text>
            </Text>
            <Text>
              <Text>Document: </Text>
              <Text>{cli.document}</Text>
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => onDelete(cli.id)}
            style={styles.delete}>
            <Text style={styles.deleteText}>DELETE</Text>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

const enhance = withObservables(['client'], ({ client }: InputProps) => ({
  client,
}));

export const ClientCard = enhance(ClientCardToObserve);
