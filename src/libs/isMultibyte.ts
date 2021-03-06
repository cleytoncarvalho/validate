// @ts-ignore allowing typedoc to build
import assertString from '../utils/assertString.ts';

const multibyte = /[^\x00-\x7F]/;

export const isMultibyte = (str: string) => {
  assertString(str);
  return multibyte.test(str);
};
