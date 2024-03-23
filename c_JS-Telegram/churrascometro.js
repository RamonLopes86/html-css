

let adulto = document.getElementById('idadulto') //350g por pessoa
let crianca = document.getElementById('idcrianca') //200g por criança
let duracao = document.getElementById('idtempo') // a cada 1h 2cervejas e 1 ref

let spanCarne = document.getElementsByTagName('span')[0]

let botao = document.getElementById('botao')

spanCarne.style.display="inline-block"
spanCarne.style.paddingTop="10px"

botao.addEventListener('click', calcular)

function calcular(){

     let res = (adulto.value * 350) / 1000

     spanCarne.innerHTML = res + " kg de carne"
     setTimeout(mudarcor,800)
     
     

}


function mudarcor(){

    spanCarne.style.color="blue"
    spanCarne.style.transform="scale(1.1)"
    spanCarne.style.transitionDuration="500ms"

}



