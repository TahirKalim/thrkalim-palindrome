// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}
// Returns true for a palindrome, false otherwise
function palindrome(string){
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}
// define a Phrase object.
function Phrase(content){
  this.content = content;
}
let phrase = new Phrase("Racecar");
phrase.content;
