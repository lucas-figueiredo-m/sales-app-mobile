import { createRegExp, not, global } from 'magic-regexp';

export const toCapitalize = (str: string): string => {
  if (str.length === 0) return str;

  const splittedString = str.split(' ');

  if (splittedString.length === 1)
    return `${str[0].toUpperCase()}${str.substring(1).toLowerCase()}`;

  const allStringsCapitalized = splittedString.map(toCapitalize);

  return allStringsCapitalized.join(' ');
};

export const toNumericStringOnly = (str: string): string => {
  return str.replace(createRegExp(not.digit, [global]), '');
};

export const isEmptyString = (str: string): boolean => {
  return str === '';
};
