import isEmail from 'validator/es/lib/isEmail';
import isEmpty from 'validator/es/lib/isEmpty';
import Equals from 'validator/es/lib/equals';
import isMobilePhone from 'validator/es/lib/isMobilePhone';

// TODO: removes nested ternaries
const buildErrorMessage = (
  error: string | undefined,
  isValid: boolean,
  defaultMessage: string,
  customErrorMessage?: string,
) =>
  isValid
    ? undefined
    : error !== undefined
    ? error
    : customErrorMessage !== undefined
    ? customErrorMessage
    : defaultMessage;

type ValidationObject = {
  field: string;
  isValid: boolean;
  error: undefined | string;
  email: (customErrorMessage?: string) => ValidationObject;
  notEmpty: (customErrorMessage?: string) => ValidationObject;
  phone: (customErrorMessage?: string) => ValidationObject;
  equals: (cmp: string, customErrorMessage?: string) => ValidationObject;
  differentFrom: (cmp: string, customErrorMessage?: string) => ValidationObject;
};

export const validate = (str: string) => {
  const n: ValidationObject = {
    field: str,
    isValid: true,
    error: undefined,

    email: (customErrorMessage?: string) => {
      n.isValid = n.isValid && isEmail(n.field);
      n.error = buildErrorMessage(
        n.error,
        n.isValid,
        'validation.email',
        customErrorMessage,
      );
      return n;
    },

    notEmpty: (customErrorMessage?: string) => {
      n.isValid = n.isValid && !isEmpty(n.field);
      n.error = buildErrorMessage(
        n.error,
        n.isValid,
        'validation.notEmpty',
        customErrorMessage,
      );
      return n;
    },

    phone: (customErrorMessage?: string) => {
      // @ts-ignore It's been ignored because it requires a list os supported locales
      n.isValid = n.isValid && isMobilePhone(n.field, 'pt-BR');
      n.error = buildErrorMessage(
        n.error,
        n.isValid,
        'validation.phone',
        customErrorMessage,
      );
      return n;
    },

    equals: (cmp: string, customErrorMessage?: string) => {
      n.isValid = n.isValid && Equals(n.field, cmp);
      n.error = buildErrorMessage(
        n.error,
        n.isValid,
        'validation.equals',
        customErrorMessage,
      );
      return n;
    },
    differentFrom: (cmp: string, customErrorMessage?: string) => {
      n.isValid = n.isValid && !Equals(n.field, cmp);
      n.error = buildErrorMessage(
        n.error,
        n.isValid,
        'validation.differentFrom',
        customErrorMessage,
      );
      return n;
    },
  };

  return n;
};

export const validateEmail = (email: string) => {
  const { isValid, error } = validate(email).email();
  return isValid || error;
};
