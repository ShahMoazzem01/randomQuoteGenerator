// function generate(){
//   var quotes = {
//     "-Albert Camus" : '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
//     "-Denis Diderot" : '"Man will never be free until the last king is strangled with the entrails of the last priest."',
//     "-Nelson Mandela" : '"The greatest glory in living lies not in never falling, but in rising every time we fall. "',
//     "-Walt Disney" : '"The way to get started is to quit talking and begin doing."',
//     " -Steve Jobs" : '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking."',
//     "-John Lennon" : '"Life is what happens when you\'re busy making other plans."'
//   }

//   let authors = Object.keys(quotes); //generate a array of keys from object "quotes"
//   let author = authors[Math.floor(Math.random()*authors.length)];//grabbing random key from object "quotes"
//   let quote = quotes[author];//selectime random value by using randome key frome the object

//   document.getElementById("quote").innerHTML = quote;
//   document.getElementById("author").innerHTML = author;
//   // console.log(authors);
//   // authors = authors.slice(authors.indexOf(author), 1);
//   // console.log(authors);




  

 

// }


/*****************************no repeatation code below  */
 

let quotes = {
  "-Albert Camus" : '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
    "-Denis Diderot" : '"Man will never be free until the last king is strangled with the entrails of the last priest."',
    "-Nelson Mandela" : '"The greatest glory in living lies not in never falling, but in rising every time we fall. "',
    "-Walt Disney" : '"The way to get started is to quit talking and begin doing."',
    " -Steve Jobs" : '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking."',
    "-John Lennon" : '"Life is what happens when you\'re busy making other plans."'
}

function authorsArrayGenerate() {
  let authorsArray = Object.keys(quotes);
  return authorsArray;
}

function pickRandomAuthor(authorsArray){
  let author = authorsArray[Math.floor(Math.random()*authorsArray.length)];
  return author;
}

function generateQuote(){
    let author = pickRandomAuthor(authorsArray);
    let quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
    authorsArray.splice(authorsArray.indexOf(author), 1);
}

let authorsArray = authorsArrayGenerate();
console.log(authorsArray);

function generate(){
  if(authorsArray.length!==0){
    generateQuote();
    console.log(authorsArray);
  } else{
    authorsArray = authorsArrayGenerate();
    generateQuote();
    console.log(authorsArray);
  }
  
}