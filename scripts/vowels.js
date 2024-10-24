import { countGivenCharactersInString } from "../lib/helpers";
import { VOWELS } from "../lib/helpers";

export function vowels(str) {
  return countGivenCharactersInString(str, VOWELS);
}
console.assert(
  vowels("halló") === 2,
  "vowels: skilar fjölda sérhljóða í streng"
);
console.assert(vowels("") === 0, "vowels: skilar 0 ef tómur strengur");
console.assert(
  vowels(null) === 0,
  "vowels: skilar 0 ef ekki er gefinn strengur"
);
