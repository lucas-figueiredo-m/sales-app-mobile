import AsyncStorage from '@react-native-async-storage/async-storage';

export enum LocalStorageKeys {
  isUsingBiometry = '@isUsingBiometry',
}

export class LocalStorage {
  async get(key: LocalStorageKeys) {
    return await AsyncStorage.getItem(key);
  }

  async set(key: LocalStorageKeys, data: string) {
    await AsyncStorage.setItem(key, data);
  }
}
