export const removeSpecialCharacters = (text: string) =>
  text.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\s{}[]\\\/]/gi, '').trim();
