let dataString = "turns out random test cases are easier than writing out basic ones";
let shortestWord;

function findShort(parameter){
 // shortestWord = ".........................................";
  let words = parameter.split(" ");
  // shortestWord = words[0]
 // for (let i = words.length-1; i >= 0; i--){
  //  if (words[i].length < shortestWord){
//shortestWord = words[i].length;
  //  }
 // }
  shortestWord = words[0]
  words.forEach(word => word.length > shortestWord.length ? null : shortestWord = word)
  return shortestWord.length;
}

function lsMinChar(parameter2) { 

const minLength = findShort( parameter2 )  

const wordsArray = parameter2.split(' ');
const wordList = []   
 for(let i = 0; i < wordsArray.length; i++) { 
 if (wordsArray[i].length === minLength) { 
   wordList.push(wordsArray[i])
 }
 }  
console.log(wordList);
return wordList 
}
      
findShort(dataString)

lsMinChar(dataString)

console.log("Min Characters lenght :" + shortestWord)


console.log("List Words with Min Characters lenght :" + lsMinChar(dataString) )
