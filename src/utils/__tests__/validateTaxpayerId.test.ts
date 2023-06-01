import { validateTaxpayerId } from '../validateTaxpayerId';

describe('Taxpayer ID validation tests', () => {
  it('Should validate true to a valid formatted taxpayer ID', () => {
    const validFormattedTaxpayerId = '43.826.667/0001-50';

    expect(validateTaxpayerId(validFormattedTaxpayerId)).toBe(true);
  });

  it('Should validate true to a valid unformatted taxpayer ID', () => {
    const validUnformattedTaxpayerId = '43826667000150';

    expect(validateTaxpayerId(validUnformattedTaxpayerId)).toBe(true);
  });

  it('Should return false to a invalid formatted taxpayer ID', () => {
    const invalidFormattedTaxpayerId = '43.826.667/0001-51';

    expect(validateTaxpayerId(invalidFormattedTaxpayerId)).toBe(false);
  });

  it('SHould return false to a invalid unformatted taxpayer ID', () => {
    const invalidUnformattedTaxpayerId = '43826667000151';

    expect(validateTaxpayerId(invalidUnformattedTaxpayerId)).toBe(false);
  });
});
