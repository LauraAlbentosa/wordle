// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const gameBoardDiv = document.getElementById('game-board');
const formElement = document.getElementById('form');
const inputElement = document.getElementById('input-word');
const errorDivElement = document.getElementById('error-div');
const errorText = document.getElementById('error-text')

const posibleWords = [
  'bolsa',
  'salsa',
  'paseo',
  'aire',
  'retos',
  'comas',
  'posar',
  'beber',
  'risas',
  'cosas',
  'bolos',
  ' lapiz'
];

const testWords = ['cosa', 'ordenador', 'paneo', 'raton', 'ola'];

const selectWord = words => {
  const indexWord = Math.floor(Math.random() * words.length);
  const finalWord = words[indexWord];
  inputElement.setAttribute('maxlength', finalWord.length);
  return finalWord;
};

const createBoard = word => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 5; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('game-board__row');
    for (let i = 0; i < word.length; i++) {
      const newSpan = document.createElement('span');
      newSpan.classList.add('letter');
      newDiv.append(newSpan);
    }
    fragment.append(newDiv);
  }
  gameBoardDiv.append(fragment);
};

const finalWord = selectWord(testWords);

const checkWordLength = word => {
  const userWord = inputElement.value;

  if (userWord.length !== word.length) {
    errorDivElement.classList.replace('d-none', 'd-block');
    return false;
  } else {
    errorDivElement.classList.add('d-none');
  }

  return userWord;
};

let counter = 0;

const printLetters = () => {
  
  const userWord = checkWordLength(finalWord);
  const divWords = document.querySelectorAll('div.game-board__row');

  if (checkWordLength) {
    counter++
    const spans = divWords[counter].children;
    for ( let i = 0;i<userWord.length; i++){
        spans[i].textContent = userWord.charAt(i)
        if(counter === 4){
            inputElement.disabled = true
            errorDivElement.classList.replace('d-none', 'd-block')
            errorText.textContent = 'You lost'
        }
       
    }

  }else{
    counter =counter
  }

  console.log(counter)
  
};

const trys = event =>{
    event.preventDefault()
    printLetters()
   
}

console.log(finalWord);
createBoard(finalWord);
formElement.addEventListener('submit', trys);
