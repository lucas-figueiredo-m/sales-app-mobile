import { User } from '@salesapp/services';
// import { AxiosError } from "axios";
import { useState } from 'react';

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const request = async (email: string, password: string) => {
    try {
      setLoading(true);
      const body = { email, password };
      const user = await User.login(body);
      return user;
    } catch (error) {
      // const err: AxiosError = error
      console.log('useLogin: ', error);

      throw setError('err?.response?.data');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, request };
}
