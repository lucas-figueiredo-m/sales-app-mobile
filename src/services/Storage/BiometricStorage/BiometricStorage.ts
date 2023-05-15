import { LocalStorage, LocalStorageKeys } from '../LocalStorage';

type BiometricData = {
  isUsing: boolean;
};

class BiometricStorageFactory {
  constructor(private localStorage: LocalStorage) {}

  async getBiometricState() {
    const data = await this.localStorage.get(LocalStorageKeys.isUsingBiometry);
    if (data) return JSON.parse(data) as BiometricData;

    return undefined;
  }

  async setBiometricState(value: boolean) {
    const data = JSON.stringify({ isUsing: value });
    await this.localStorage.set(LocalStorageKeys.isUsingBiometry, data);
  }
}

const BiometricStorage = new BiometricStorageFactory(new LocalStorage());

export { BiometricStorage };
