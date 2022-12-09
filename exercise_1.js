/* 
  Desafio/Execício - 1

  solicitar ao usuário 2 números a partir dai 

  [] A some dos dois números;
  [] A subtração dos dois números;
  [] A multiplicação dos dois números;
  [] A divisão dos dois números;
  [] O resto da divisão dos dois números;



  [] verifique se a soma dos dois números é par ou (impar)
  [] verifique se os dois números inseridos são iguais ou diferentes
*/

alert('Desafio/Exercício - 1')
let numberOne = prompt('Digite o primeiro número: ')
let numberTwo = prompt('Digite o segundo número: ')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert(`A soma dos números é ${sum}`)
alert(`A subtração dos números é ${sub}`)
alert(`A multiplicação dos números é ${multi}`)
alert(`A divisão dos números é ${div}`)
alert(`O resto da divisão dos números é ${restDiv}`)

if ((sum % 2) == 0) {
  alert('A soma dos dois números é par!')
}else {
  alert('A soma dos dois números é impar!')
}

if(numberOne == numberTwo) {
  alert('Os dois números inseridos são iguais!')
}else {
  alert('Os dois números inseridos não são iguais!')
}