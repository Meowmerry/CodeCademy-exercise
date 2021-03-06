

const countCharacter = function(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count; 
};
// MessageMixer.countCharacter();

const capitalizeFirstCharacterOfWords = function(string) {
  let arr = string.split(" ");  
    for (let i = 0; i < arr.length; i++) {  
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
  return arr.join(" "); 
};
// MessageMixer.capitalizeFirstCharacterOfWords();

const reverseWord = function(word) {
  return word.split("").reverse().join("");
};
// MessageMixer.reverseWord();

const reverseAllWords = function(sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i]);
    }
   return words.join(" ");
};
// MessageMixer.reverseAllWords();

const replaceFirstOccurence = function(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};

const palindrome = function(str){
  return str + " " + reverseWord(str)
}

const pigLatin = function(sentence, character) {
  return sentence.split(' ').join(character + ' ');
};

const replaceAllOccurrences = function(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};
// MessageMixer.replaceAllOccurrences();

const encode = function(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
};

// MessageMixer.encode()
// module.exports = MessageMixer;
export {countCharacter,capitalizeFirstCharacterOfWords,reverseWord,reverseAllWords,replaceFirstOccurence,palindrome,pigLatin,replaceAllOccurrences,encode}



