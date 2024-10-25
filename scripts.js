/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { longest } from "./scripts/longest.js";
import { shortest } from "./scripts/shortest.js";
import { reverse } from "./scripts/reverse.js";
import { vowels } from "./scripts/vowels.js";
import { consonants } from "./scripts/consonants.js";
import { palindrome } from "./scripts/palindrome.js";

const textArea = document.querySelector("#string");
const analyzeButton = document.querySelector("#analyzeButton");
const clearButton = document.querySelector("#clearButton");
const outputDiv = document.querySelector(".output.hidden");

let analysisVisible = false;

analyzeButton.addEventListener("click", () => {
  analysisVisible = true;
  analyzeText();
});
textArea.addEventListener("input", analyzeText);
clearButton.addEventListener("click", clearResults);

function analyzeText() {
  const text = textArea.value;

  if (text.trim() !== "") {
    document.querySelector(".input").textContent = text;
    document.querySelector(".longest").textContent = longest(text);
    document.querySelector(".shortest").textContent = shortest(text);
    document.querySelector(".vowels").textContent = vowels(text);
    document.querySelector(".consonants").textContent = consonants(text);
    document.querySelector(".palindrome").textContent = palindrome(text)
      ? "samhverfur"
      : "ekki samhverfur";
    document.querySelector(".reversed").textContent = reverse(text);

    if (analysisVisible) {
      outputDiv.classList.remove("hidden");
    }
  } else {
    outputDiv.classList.add("hidden");
  }
}

function clearResults() {
  textArea.value = "";
  outputDiv.classList.add("hidden");
  analysisVisible = false;
}
