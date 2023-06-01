import { createRegExp, digit, not, global, exactly } from 'magic-regexp';

const removeNonDigit = not.digit;

const restOfNumeric = digit.grouped();

const phoneSection1 = digit.times(2).grouped();
const phoneSection2 = digit.times(4).grouped();
const phoneSection2b = digit.times(5).grouped();
const phoneSection3 = digit.times(4).grouped();

const phoneCleanup = createRegExp(removeNonDigit, [global]);
const phonePart1 = createRegExp(phoneSection1, restOfNumeric);
const phonePart2 = createRegExp(
  exactly('(', phoneSection1, ') ', phoneSection2),
  restOfNumeric,
);
const phonePart2b = createRegExp(
  exactly('(', phoneSection1, ') ', phoneSection2b),
  restOfNumeric,
);
const phonePart3 = createRegExp(
  exactly('(', phoneSection1, ') ', phoneSection2, '-', phoneSection3),
);
const phonePart3b = createRegExp(
  exactly('(', phoneSection1, ') ', phoneSection2b, '-', phoneSection3),
);

export const formatPhoneNumber = (formattedPhone: string): string => {
  const cleanedUpPhone = formattedPhone.replace(phoneCleanup, '');
  return cleanedUpPhone
    .replace(createRegExp(restOfNumeric), '($1')
    .replace(phonePart1, '$1) $2')
    .replace(
      cleanedUpPhone.length > 10 ? phonePart2b : phonePart2,
      '($1) $2-$3',
    )
    .replace(
      cleanedUpPhone.length > 10 ? phonePart3b : phonePart3,
      '($1) $2-$3',
    );
  // .replace(phonePart5, '($1) $2')
  // .replace(phonePart5, '($1) $2-$3');
};
