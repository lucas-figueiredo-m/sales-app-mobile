import { createRegExp, digit, anyOf } from 'magic-regexp';

const regex = createRegExp(anyOf('S/N', digit));

export const validateAddressNumber = (addrNumber: string): boolean => {
  const matches = regex.exec(addrNumber);
  return matches !== null && matches.length > 0;
};
