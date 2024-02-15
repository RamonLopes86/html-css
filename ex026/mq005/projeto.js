
let menu = document.getElementById('menu-opcoes');

function clicar(){


if(menu.style.display == "block"){

    menu.style.display=" none"
    
    
}else{

    menu.style.display="block"
   
   
}
    
}


function tamanho(){

if(window.innerWidth >= 780){

    menu.style.display="block"
}else{

    menu.style.display="none"
}    


}

