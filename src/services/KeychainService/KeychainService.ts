import * as RNKeychain from 'react-native-keychain';
import { HttpService } from '../Http';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { DecodedJwt } from '@salesapp/types';

const KeychainOptions: RNKeychain.Options = {
  accessControl:
    RNKeychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE,
  authenticationType:
    RNKeychain.AUTHENTICATION_TYPE.DEVICE_PASSCODE_OR_BIOMETRICS,
  accessible: RNKeychain.ACCESSIBLE.WHEN_UNLOCKED,
};

class KeychainService {
  constructor(private http: typeof HttpService) {}

  async getToken() {
    const content = await RNKeychain.getGenericPassword(KeychainOptions);
    if (!content) return false;

    const decodedToken = jwt_decode<DecodedJwt>(content.username);

    this.http.setUserData(content.username, decodedToken.employee_id);

    return true;
  }

  async setToken() {
    const token = this.http.access_token;
    return await RNKeychain.setGenericPassword(token, '', KeychainOptions);
  }

  async clearToken() {
    return await RNKeychain.resetGenericPassword(KeychainOptions);
  }
}

export const Keychain = new KeychainService(HttpService);
