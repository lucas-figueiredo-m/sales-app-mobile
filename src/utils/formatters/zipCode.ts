import { not, digit, createRegExp, global, exactly } from 'magic-regexp';

const removeNonDigit = not.digit;
const restOfNumeric = digit.grouped();

const zipSection1 = digit.times(5).grouped();

const zipCleanup = createRegExp(removeNonDigit, [global]);
const zipPart1 = createRegExp(exactly(zipSection1), restOfNumeric);

export const formatZipCode = (zipCode: string): string => {
  return zipCode.replace(zipCleanup, '').replace(zipPart1, '$1-$2');
};
