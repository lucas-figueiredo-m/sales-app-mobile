import { ConsultTaxpayerIdData } from '@salesapp/types';
import { HttpServiceFactory } from '../HttpService';

const TaxpayerIdFinder = new HttpServiceFactory('https://publica.cnpj.ws');

class ExternalServicesClass {
  constructor(private taxpayerFindService: HttpServiceFactory) {}

  async findTaxpayerIdData(taxpayerId: string) {
    const data = await this.taxpayerFindService.get<ConsultTaxpayerIdData>(
      `/cnpj/${taxpayerId}`,
    );

    return data;
  }
}

export const ExternalServices = new ExternalServicesClass(TaxpayerIdFinder);
