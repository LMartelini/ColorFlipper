let botao = document.querySelector('button').onclick = clicar;
let div = document.querySelector('.espaço');

let digitoHexadecimal = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let color = document.querySelector('#color');

function clicar(){
    let codigoHex = [];
    for(let i = 0; i < 6; i++){
        let numero = Math.random() * 17;
        numero = Math.round( numero );
        codigoHex.push(digitoHexadecimal[numero]);
    }

    let cor = codigoHex[0] + codigoHex[1] + codigoHex[2] + codigoHex[3] + codigoHex[4] + codigoHex[5];
    console.log(cor);

    div.style.backgroundColor = '#' + cor;

    color.innerHTML = '#' + cor;
}