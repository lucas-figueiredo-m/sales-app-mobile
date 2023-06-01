import { formatTaxpayerId, validateTaxpayerId } from '@salesapp/utils';
import { z } from 'zod';

export const newClientDefaultForm = {
  taxpayerId: formatTaxpayerId('21381292000120'),

  companyName: '',
  tradeName: '',
  companyType: '',
  stateRegistry: '',

  zipCode: '',
  neighborhood: '',
  address: '',
  complement: '',
  city: '',
  state: '',

  phone: '',
  buyerFirstName: '',
  buyerLastName: '',
  defaultPaymentMethod: '',
};

export const NewClientSchema = z.object({
  taxpayerId: z
    .string()
    .length(18, 'error.form.taxpayerIdLength')
    .refine(validateTaxpayerId, 'error.form.taxpayerIdInvalid'),

  companyName: z.string().min(1),
  tradeName: z.string(),
  companyType: z.string().min(1),
  stateRegistry: z.string().min(1),

  zipCode: z.string().length(9),
  neighborhood: z.string().min(1),
  address: z.string().min(1),
  complement: z.string(),
  city: z.string().min(1),
  state: z.string().length(2),

  phone: z.string().min(14).max(15),
  buyerFirstName: z.string().min(1),
  buyerLastName: z.string().min(1),
  defaultPaymentMethod: z.string().min(1),
});

export type NewClientSchemaType = z.infer<typeof NewClientSchema>;
