

let adulto = document.getElementById('idadulto') //350g por pessoa
let crianca = document.getElementById('idcrianca') //200g por criança
let duracao = document.getElementById('idtempo') // a cada 1h 2cervejas e 1 ref


let spanCarne = document.getElementsByTagName('span')[0]
let spanCerveja = document.getElementsByTagName('span')[1]
let spanBebida = document.getElementsByTagName('span')[2]
let alerta = document.getElementById('msg')

alerta.style.opacity="0"


let botao = document.getElementById('botao')


spanCarne.style.padding = "10px 0px"




botao.addEventListener('click', calcular)


function carnePP(duracao) {

    if (duracao.value <= 4) {

        return 450

    } else {

        return 650
    }



}

function cervejapp(duracao) {

    if (duracao.value <= 4) {

        return 2;

    } else {

        return 4;
    }

}

function bebidaPP(duracao){

    if(duracao.value <= 4){

        return 1;
    }else{

        return 2;
    }
}

function alertar(){

    alerta.style.opacity="1"
    alerta.style.transitionDuration="800ms" 
    alerta.style.transform="scale(1.2)"

}

function calcular() {

    

    if (adulto.value === "" && crianca.value === "" && duracao.value === "") {

        // alert("Preencha o(s) Campo(s)")

        // alerta.style.opacity="1"
        // alerta.style.transitionDuration="800ms"
        
        setTimeout(alertar , 500)
        


    } else {

        let resCarne = (adulto.value * carnePP(duracao)) / 1000
        let resCerveja = adulto.value * cervejapp(duracao)
        let resBebida = (Number(adulto.value * 2) + Number(crianca.value)) * bebidaPP(duracao)
        let resCrianca = (crianca.value * (carnePP(duracao) / 2)) / 1000






        let resFinal = ((resCarne + resCrianca).toFixed(2))

        if (resFinal < 1) {

            resFinal = (resFinal * 1000) + " gramas de carne"

        } else if (resFinal >= 1) {

            resFinal += " kg de carne"

        }



        spanCarne.innerHTML = resFinal

        spanCerveja.innerHTML = resCerveja + " Garrafas de Cervejas "

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




