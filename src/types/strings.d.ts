declare global {
  interface String {
    toCapitalize(): string;
    numericStringOnly(): string;
    isEmptyString(): boolean;
    toInsertableData(): string;
  }
}

export {};
