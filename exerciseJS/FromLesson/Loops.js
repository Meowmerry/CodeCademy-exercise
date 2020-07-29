// Write your code below
let bobsFollowers = ['Meow', 'Mandy', 'Todd', 'Hana'];
let tinasFollowers = ['Todd', 'Hana', 'Micky'];
let mutualFollowers =[];
for (let i = 0 ; i < bobsFollowers.length; i++){
  for(let j = 0 ; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
     
    }
  }
}
 console.log('both are friends ' + mutualFollowers)

 //----------- While Loop ---------
 // A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard = [];
while(currentCard !==  'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
  console.log(cards)
}

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// The break Keyword    ----  Write your code below
for(let i = 0; i < rapperArray.length ; i++){
 console.log(rapperArray[i])
 if(rapperArray[i] === 'Notorious B.I.G.' ){
   break;
 }
}
console.log("And if you don't know, now you know.")


//------------- Whale Talk ----- 
let input = 'a whale us us of a deal!';
let vowels =  ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for(let i = 0; i < input.length ; i++){
  // console.log('i is '+ input[i]);
  for(let j = 0 ; j < vowels.length ; j++){
    // console.log('j is '+ j);
    if(input[i] === vowels[j] ){
      if(input[i] === 'e' ){
        resultArray.push('ee')
      }else if( input[i] === 'u'){
         resultArray.push('uu')
        }else{
        resultArray.push(input[i]);
      }
    }
  }
}
console.log(resultArray.join('').toUpperCase())