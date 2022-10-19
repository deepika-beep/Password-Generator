// Generator functions- http://www.net-comber.com/charset.html
const result = document.getElementById('result')
const btnClip = document.getElementById('clipboard')
const passLeng = document.getElementById('length')
const uppCase = document.getElementById('uppercase')
const lowerCase= document.getElementById('lowercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const genButton = document.getElementById('generate')

const randomFun ={
  lower:getrandomLow,
  upper:getrandomUpp,
  number:getrandomNum,
  char:getspecChar
}

genButton.addEventListener('click', () =>{
  // turn string to number
  const lengthVal = +passLeng.value;

  const hasLower = lowerCase.checked;
  const hasUpper = uppCase.checked;
  const hasNum = numbers.checked;
  const hasSymbols = symbols.checked;
   result.innerText = generatePassword(hasLower,hasUpper,hasNum,hasSymbols)
})
 
// generate password func
function generatePassword(lower,upper,num,symbols,length){
  let genPass = '';
const typesCount = lower + upper + num + symbols
console.log(typesCount)
const typeArr = [{lower},{upper},{num},{symbols}]
console.log(typeArr)
const arr =typeArr.filter(type => Object.values(type)[0])
console.log(arr)

if(typesCount == 0){
  return '';
}

// for(let i=0;i < lengthVal;i += typesCount ){

// }

}
console.log(randomFun.lower)

function getrandomLow(){
return(String.fromCharCode(Math.floor(Math.random()*26) + 97))
}


function getrandomUpp(){
  return(String.fromCharCode(Math.floor(Math.random()*26) + 65))
}

function getrandomNum(){
  return(String.fromCharCode(Math.floor(Math.random()*10) + 48))
}

function getspecChar(){
  let char = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  return char[Math.floor(Math.random() *char.length)]
}
