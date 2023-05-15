import { Employee, EmployeeSignIn } from '@salesapp/types';
import { HttpService } from '../HttpService';

class UserClass {
  constructor(private http: typeof HttpService) {}

  async login(body: { email: string; password: string }): Promise<Employee> {
    const user = await this.http.post<EmployeeSignIn, Employee>(
      '/employee/signin',
      body,
    );

    this.http.setUserData(user.access_token, user.server_id);

    return user;
  }
}

export const User = new UserClass(HttpService);
