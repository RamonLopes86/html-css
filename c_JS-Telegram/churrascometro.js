

let adulto = document.getElementById('idadulto') //350g por pessoa
let crianca = document.getElementById('idcrianca') //200g por criança
let duracao = document.getElementById('idtempo') // a cada 1h 2cervejas e 1 ref


let spanCarne = document.getElementsByTagName('span')[0]
let spanCerveja = document.getElementsByTagName('span')[1]
let spanBebida = document.getElementsByTagName('span')[2]


let botao = document.getElementById('botao')


spanCarne.style.padding = "10px 0px"




botao.addEventListener('click', calcular)

function calcular() {

    

    if(adulto.value === "" && crianca.value === "" && duracao.value === ""){

        alert("Preencha o(s) Campo(s)")
        
    }else {

    let resCarne = (adulto.value * 350) / 1000
    let resCerveja = adulto.value * 4
    let resBebida = (parseFloat(adulto.value) + parseFloat(crianca.value)) * 1
    let resCrianca = (crianca.value * 150) / 1000
    

    

 

    let resFinal = ((resCarne + resCrianca).toFixed(2))

    if (resFinal < 1) {

        resFinal = (resFinal * 1000) + " gramas de carne"

    } else if (resFinal >= 1) {

        resFinal = resFinal + " kg de carne"

    } 



        spanCarne.innerHTML = resFinal 

        spanCerveja.innerHTML = resCerveja+ " Garrafas de Cervejas "

        spanBebida.innerHTML = resBebida + " litros de Refrigerante "

        


}
   


    setTimeout(mudarcorCarne, 400)


}




function mudarcorCarne() {

    spanCarne.style.color = "blue"
    spanCerveja.style.color = "blue"
    spanBebida.style.color = "blue"
    spanCarne.style.transitionDuration = "800ms"
    spanCerveja.style.transitionDuration = "800ms"
    spanBebida.style.transitionDuration = "800ms"

}




