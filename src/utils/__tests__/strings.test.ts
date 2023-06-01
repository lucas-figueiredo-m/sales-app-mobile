import { toNumericStringOnly, isEmptyString } from '../strings';

describe('Tests if given a string, it returns only numeric chars on it', () => {
  it('Should remove all non-numeric chars', () => {
    const str = '43.826.667/0001-50';

    expect(toNumericStringOnly(str)).toBe('43826667000150');
  });

  it('Should return false', () => {
    const str = 'sweerw';

    expect(isEmptyString(str)).toBe(false);
  });

  it('Should return true', () => {
    const str = '';

    expect(isEmptyString(str)).toBe(true);
  });
});
