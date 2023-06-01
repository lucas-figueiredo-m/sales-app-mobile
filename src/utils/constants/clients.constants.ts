import { ClientType, PaymentMethod, Translation } from '@salesapp/types';

export const PaymentMethodLabels: { [key in PaymentMethod]: Translation } = {
  [PaymentMethod.BANK_SLIP]: 'common.paymentMethods.bankSlip',
  [PaymentMethod.PIX]: 'common.paymentMethods.pix',
  [PaymentMethod.CASH]: 'common.paymentMethods.cash',
  [PaymentMethod.PAY_CHECK]: 'common.paymentMethods.payCheck',
};

export const ClientTypeLabels: { [key in ClientType]: Translation } = {
  [ClientType.LARGE_BUSINESS]: 'common.clientType.largeBusiness',
  [ClientType.SMALL_BUSINESS]: 'common.clientType.smallBusiness',
};

export const PaymentMethodOptions = [
  {
    label: PaymentMethodLabels[PaymentMethod.BANK_SLIP],
    value: PaymentMethod.BANK_SLIP,
  },
  {
    label: PaymentMethodLabels[PaymentMethod.PIX],
    value: PaymentMethod.PIX,
  },
  {
    label: PaymentMethodLabels[PaymentMethod.CASH],
    value: PaymentMethod.CASH,
  },
  {
    label: PaymentMethodLabels[PaymentMethod.PAY_CHECK],
    value: PaymentMethod.PAY_CHECK,
  },
];

export const ClientTypeOptions = [
  {
    label: ClientTypeLabels[ClientType.LARGE_BUSINESS],
    value: ClientType.LARGE_BUSINESS,
  },
  {
    label: ClientTypeLabels[ClientType.SMALL_BUSINESS],
    value: ClientType.SMALL_BUSINESS,
  },
];
