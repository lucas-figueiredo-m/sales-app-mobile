import { createRegExp, digit, not, global, exactly } from 'magic-regexp';

const removeNonDigit = not.digit;
const restOfNumeric = digit.grouped();

const regSection1 = digit.times(9).grouped();
const regSection2 = digit.times(2).grouped();

const cleanupRegex = createRegExp(removeNonDigit, [global]);

const regPart1 = createRegExp(regSection1, restOfNumeric);

const regPart2 = createRegExp(
  exactly(regSection1, '.', regSection2),
  restOfNumeric,
);

const regPart3 = createRegExp(
  exactly(regSection1, '.', regSection2, '-'),
  restOfNumeric,
);

export const formatStateRegistry = (formattedStateRegistry: string): string => {
  const cleanedUpStateRegistry = formattedStateRegistry.replace(
    cleanupRegex,
    '',
  );

  return cleanedUpStateRegistry
    .replace(regPart1, '$1.$2')
    .replace(regPart2, '$1.$2-$3')
    .replace(regPart3, '$1.$2-$3');
};
