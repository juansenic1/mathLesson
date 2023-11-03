import {numeroSacado} from './diceRolling.js'
const rollkBtn = document.querySelector('#btnLanzar');
let cara = numeroSacado
let  numPositive =  0;
rollkBtn.addEventListener('click', queCara);

let  puntaje  = 100;
function queCara() {
    let cara = numeroSacado

        const numberDice1 = document.querySelector('#num1').value;
        const numberDice2 = document.querySelector('#num2').value;
        const diceResta = Number(numberDice1)- Number(numberDice2);
        
    if (diceResta< 0) {
       numPositive =  diceResta * -1

    }else{
        numPositive =  diceResta * 1
    }
    if (cara< numberDice1 || cara> numberDice2 ) {
        setTimeout(() => {

            document.querySelector('#puntaje').innerHTML = 'perdiste';

        }, 2000);
        setTimeout(() => {

            location.reload()
        }, 4800);
    }
probabilida();

}

function probabilida() {
    const probabilidaDice = (16.66666 * numPositive);
    if (probabilidaDice == 0 ) {
        probabilidaDice = 16.66666
    }  

    const  newPuntaje  = (puntaje - probabilidaDice);
    

    const cambioPuntaje  = document.querySelector('#puntaje');

    cambioPuntaje.innerHTML = newPuntaje;

}





