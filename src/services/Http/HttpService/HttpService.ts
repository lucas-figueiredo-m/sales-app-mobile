import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import Config from 'react-native-config';
import * as AxiosLogger from 'axios-logger';

interface ReqParams<P> extends AxiosRequestConfig {
  params?: P;
}
type DefaultParams = Record<string, never>;

class HttpServiceFactory {
  protected accessToken: string;
  public id: number;
  private readonly logs_enabled: boolean;

  constructor() {
    this.logs_enabled = Config.ENABLE_API_LOGS;
    this.accessToken = '';
    this.id = 0;
  }

  get api(): AxiosInstance {
    return this.restServiceInstance();
  }

  get access_token(): string {
    return this.accessToken;
  }

  setUserData(access_token: string, id: number) {
    this.accessToken = access_token;
    this.id = id;
  }

  private restServiceInstance() {
    const instance = axios.create({ baseURL: Config.API_URL });
    this.addRequestInterceptor(instance);
    this.addResponseInterceptor(instance);

    return instance;
  }

  async get<T, P = DefaultParams>(
    url: string,
    conf?: ReqParams<P>,
  ): Promise<T> {
    try {
      const { data } = await this.api.get<T>(url, conf);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error;
      }

      throw error;
    }
  }

  async post<U, T, P = DefaultParams>(
    url: string,
    body: U,
    conf?: ReqParams<P>,
  ): Promise<T> {
    const { data } = await this.api.post<T>(url, body, conf);
    return data;
  }

  private addRequestInterceptor(instance: AxiosInstance) {
    instance.interceptors.request.use(async request => {
      // TODO: fix typo

      request.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      if (this.accessToken)
        request.headers.Authorization = `Bearer ${this.accessToken}`;

      // const { token } = await Keychain.getToken()

      return this.logs_enabled ? AxiosLogger.requestLogger(request) : request;
    }, AxiosLogger.errorLogger);
  }

  private addResponseInterceptor(instance: AxiosInstance) {
    instance.interceptors.response.use(async response => {
      return this.logs_enabled
        ? AxiosLogger.responseLogger(response)
        : response;
    }, AxiosLogger.errorLogger);
  }
}

export const HttpService = new HttpServiceFactory();
