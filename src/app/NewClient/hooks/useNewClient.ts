import { useForm } from 'react-hook-form';
import {
  NewClientSchema,
  NewClientSchemaType,
  newClientDefaultForm,
} from '../utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';

export const useNewClient = () => {
  const form = useForm<NewClientSchemaType>({
    defaultValues: newClientDefaultForm,
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(NewClientSchema),
  });

  const setValue = (name: keyof NewClientSchemaType, value: string) => {
    return form.setValue(name, value, {
      shouldValidate: true,
      shouldTouch: true,
    });
  };

  const {
    taxpayerId,

    companyName,
    tradeName,
    companyType,
    stateRegistry,

    zipCode,
    neighborhood,
    address,
    complement,
    city,
    state,

    buyerFirstName,
    buyerLastName,
    phone,
    defaultPaymentMethod,
  } = form.formState.errors;

  const errors = useMemo(
    () => ({
      taxpayerId,
      companyName,
      companyType,
      stateRegistry,
      tradeName,
      zipCode,
      neighborhood,
      address,
      complement,
      city,
      state,
      phone,
      buyerFirstName,
      buyerLastName,
      defaultPaymentMethod,
    }),
    [
      taxpayerId,
      companyName,
      companyType,
      stateRegistry,
      tradeName,
      zipCode,
      neighborhood,
      address,
      complement,
      city,
      state,
      phone,
      buyerFirstName,
      buyerLastName,
      defaultPaymentMethod,
    ],
  );

  return { ...form, errors, setValue };
};
