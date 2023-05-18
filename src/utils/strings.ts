import { createRegExp, digit, not, global, exactly } from 'magic-regexp';

export const toCapitalize = (str: string): string => {
  if (str.length === 0) return str;

  return `${str[0].toUpperCase()}${str.substring(1)}`;
};

const removeNonDigit = not.digit;

const restOfNumeric = digit.grouped();

const taxpayerIdSection1 = digit.times(2).grouped();
const taxpayerIdSection2 = digit.times(3).grouped();
const taxpayerIdSection3 = digit.times(3).grouped();
const taxpayerIdSection4 = digit.times(4).grouped();
const taxpayerIdSection5 = digit.times(2).grouped();

const taxpayerIdCleanup = createRegExp(removeNonDigit, [global]);
const taxpayerIdPart1 = createRegExp(taxpayerIdSection1, restOfNumeric);
const taxpayerIdPart2 = createRegExp(
  exactly(taxpayerIdSection1, '.', taxpayerIdSection2),
  restOfNumeric,
);
const taxpayerIdPart3 = createRegExp(
  exactly(taxpayerIdSection1, '.', taxpayerIdSection2, '.', taxpayerIdSection3),
  restOfNumeric,
);
const taxpayerIdPart4 = createRegExp(
  exactly(
    taxpayerIdSection1,
    '.',
    taxpayerIdSection2,
    '.',
    taxpayerIdSection3,
    '/',
    taxpayerIdSection4,
  ),

  restOfNumeric,
);
const taxpayerIdPart5 = createRegExp(
  exactly(
    taxpayerIdSection1,
    '.',
    taxpayerIdSection2,
    '.',
    taxpayerIdSection3,
    '/',
    taxpayerIdSection4,
    '-',
    taxpayerIdSection5,
  ),
);

export const formatTaxpayerId = (taxpayerId: string): string => {
  return taxpayerId
    .replace(taxpayerIdCleanup, '')
    .replace(taxpayerIdPart1, '$1.$2')
    .replace(taxpayerIdPart2, '$1.$2.$3')
    .replace(taxpayerIdPart3, '$1.$2.$3/$4')
    .replace(taxpayerIdPart4, '$1.$2.$3/$4-$5')
    .replace(taxpayerIdPart5, '$1.$2.$3/$4-$5');
};
