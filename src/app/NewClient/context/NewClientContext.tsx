import { ClientService, ExternalServices } from '@salesapp/services';
import { ConsultTaxpayerIdData } from '@salesapp/types';
import React, {
  useContext,
  useState,
  createContext,
  useMemo,
  useCallback,
} from 'react';
import { useNewClient } from '../hooks';
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormTrigger,
} from 'react-hook-form';
import { NewClientSchemaType } from '../utils';

import '@salesapp/extensions';
import { formatPhoneNumber, formatZipCode } from '@salesapp/utils';

type NewClientContextType = {
  onSearchTaxpayerIdInfo: () => Promise<void>;
  loading: boolean;
  control?: Control<NewClientSchemaType>;
  trigger?: UseFormTrigger<NewClientSchemaType>;
  handleSubmit?: UseFormHandleSubmit<NewClientSchemaType>;
  errors?: FieldErrors<NewClientSchemaType>;
  getValues?: UseFormGetValues<NewClientSchemaType>;
  registerNewClient: (callback: () => void) => void;
};

export const NewClientContext = createContext<NewClientContextType>({
  onSearchTaxpayerIdInfo: () => new Promise(() => null),
  loading: false,
  registerNewClient: () => null,
});

type NewClientContextContainerType = {
  children: React.ReactNode;
};

export const NewClientContextContainer: React.FC<
  NewClientContextContainerType
> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const {
    control,
    trigger,
    handleSubmit,
    setValue,
    getValues,
    errors,
    setError,
  } = useNewClient();

  const fillFormFromTaxpayerIdData = useCallback(
    (data: ConsultTaxpayerIdData) => {
      const { estabelecimento } = data;

      const splittedName = data.socios[0].nome.split(' ');
      const firstName = splittedName[0];
      const lastName = splittedName.slice(-1)[0];

      const stateRegistry =
        estabelecimento.inscricoes_estaduais.length > 0
          ? estabelecimento.inscricoes_estaduais[0].inscricao_estadual
          : '';

      const fantasyName = estabelecimento.nome_fantasia
        ? estabelecimento.nome_fantasia.toCapitalize()
        : '';

      const complement = estabelecimento.complemento
        ? estabelecimento.complemento.toCapitalize()
        : '';

      setValue('companyName', data.razao_social.toCapitalize());
      setValue('tradeName', fantasyName);
      setValue('stateRegistry', stateRegistry);
      setValue('zipCode', formatZipCode(estabelecimento.cep));
      setValue('neighborhood', estabelecimento.bairro.toCapitalize());
      setValue(
        'address',
        (
          estabelecimento.tipo_logradouro +
          ' ' +
          estabelecimento.logradouro
        ).toCapitalize(),
      );
      setValue('number', estabelecimento.numero);
      setValue('complement', complement);
      setValue('city', estabelecimento.cidade.nome.toCapitalize());
      setValue('state', estabelecimento.estado.sigla);

      setValue(
        'phone',
        formatPhoneNumber(estabelecimento.ddd1 + estabelecimento.telefone1),
      );
      setValue('buyerFirstName', firstName.toCapitalize());
      setValue('buyerLastName', lastName.toCapitalize());
    },
    [setValue],
  );

  const onSearchTaxpayerIdInfo = useCallback(async () => {
    try {
      const valid = await trigger('taxpayerId');

      if (!valid) {
        throw new Error('Invalid Taxpayer id');
      }
      setLoading(true);

      const taxpayerId = getValues('taxpayerId').numericStringOnly();

      const client = await ClientService.findByTaxpayerId(taxpayerId);

      if (client) {
        setError('taxpayerId', {
          message: 'error.form.clientAlreadyExists',
          type: 'validate',
        });

        throw new Error('Taxpayer ID already exists');
      }

      const data = await ExternalServices.findTaxpayerIdData(taxpayerId);
      fillFormFromTaxpayerIdData(data);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, [fillFormFromTaxpayerIdData, getValues, trigger, setError]);

  const registerNewClient = useCallback(
    (callback: () => void) =>
      handleSubmit(
        async data => {
          await ClientService.create({
            address: data.address,
            phone: data.phone.numericStringOnly(),
            company_name: data.companyName,
            trade_name: data.tradeName,
            taxpayer_id: data.taxpayerId.numericStringOnly(),
            complement: data.complement,
            buyer_first_name: data.buyerFirstName,
            buyer_last_name: data.buyerLastName,
            zip_code: data.zipCode.numericStringOnly(),
            employee_id: 1,
            active: true,
            type: data.companyType,
            number: data.number,
          });
          callback();
        },
        error => {
          console.log('[Error saving user]: ', error);
        },
      )(),
    [handleSubmit],
  );

  const context: Required<NewClientContextType> = useMemo(
    () => ({
      onSearchTaxpayerIdInfo,
      loading,
      control,
      trigger,
      handleSubmit,
      errors,
      getValues,
      registerNewClient,
    }),
    [
      onSearchTaxpayerIdInfo,
      loading,
      control,
      trigger,
      handleSubmit,
      errors,
      getValues,
      registerNewClient,
    ],
  );

  return (
    <NewClientContext.Provider value={context}>
      {children}
    </NewClientContext.Provider>
  );
};

export const useNewClientContext = () => useContext(NewClientContext);
