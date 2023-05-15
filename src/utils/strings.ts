export const toCapitalize = (str: string): string => {
  if (str.length === 0) return str;

  return `${str[0].toUpperCase()}${str.substring(1)}`;
};

export const formatTaxpayerId = (taxpayerId: string): string => {
  const part1 = taxpayerId.slice(0, 2);
  const part2 = taxpayerId.slice(2, 5);
  const part3 = taxpayerId.slice(5, 8);
  const part4 = taxpayerId.slice(8, 12);
  const part5 = taxpayerId.slice(12);

  return `${part1}.${part2}.${part3}/${part4}-${part5}`;
};
