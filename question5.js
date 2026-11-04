
// Fråga 5. (3p) String-arrays 
// Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// Använd indexOf eller includes

function filterWordsWithLetterA(words) {
  // ✅ Robust: hanterar både stora och små bokstäver
  return words.filter((word) => word.toLowerCase().includes("a"));

}



console.log(filterWordsWithLetterA(["Programming", "is", "great!"])); // ska logga ["Programming", "great!"]
