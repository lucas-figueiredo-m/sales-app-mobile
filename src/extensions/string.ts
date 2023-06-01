/* eslint-disable no-extend-native */
import {
  isEmptyString,
  toCapitalize,
  toNumericStringOnly,
  removeSpecialCharacters,
} from '@salesapp/utils';

String.prototype.toCapitalize = function (this: string) {
  return toCapitalize(this);
};

String.prototype.numericStringOnly = function (this: string) {
  return toNumericStringOnly(this);
};

String.prototype.isEmptyString = function (this: string) {
  return isEmptyString(this.valueOf());
};

String.prototype.toInsertableData = function (this: string) {
  return removeSpecialCharacters(this);
};
