export const toCurrency = (value: number) => {
  const stringValue = value.toFixed(0).toString();
  return stringValue.replace(/(^)/, 'R$ $1').replace(/(\d{2}$)/, ',$1');
};
