function trface1(){
    document.getElementById('facebook').src="imagem/facebookteste.png";  
}

function trface0(){
    document.getElementById('facebook').src="imagem/facebook.png";
}


function trinst1(){
    document.getElementById('inst').src="imagem/inst1.png";  
}

function trinst0(){
    document.getElementById('inst').src="imagem/inst.png";
}

function trgit1(){
    document.getElementById('git').src="imagem/git1.png";  
}

function trgit0(){
    document.getElementById('git').src="imagem/git.png";
}

function trin1(){
    document.getElementById('in').src="imagem/in1.png";  
}

function trin0(){
    document.getElementById('in').src="imagem/in.png";
}

/* ------------------- Descriçao --------------------------- */



function mostrar(){
   
     document.getElementById('movimento').style.display = "block";
     document.getElementById('botaodescrião').style.display = "none";

}

function fechar(){
    document.getElementById('movimento').style.display = "none";
     document.getElementById('botaodescrião').style.display = "block";
}




// -------------------- movimento dos menus TOP -------------------


document.getElementById('header_sobre').onclick = function(){
    window.scrollTo({
        top: 800,
        behavior: 'smooth'
    });
}

document.getElementById('header_sobre2').onclick = function(){
    window.scrollTo({
        top: 800,
        behavior: 'smooth'
    });
}



document.getElementById('header_projetos').onclick = function(){
    window.scrollTo({
        top: 1250,
        behavior: 'smooth'
    });
}

document.getElementById('header_projetos2').onclick = function(){
    window.scrollTo({
        top: 1440,
        behavior: 'smooth'
    });
}

document.getElementById('header_educa').onclick = function(){
    window.scrollTo({
        top: 2400,
        behavior: 'smooth'
    });
}

document.getElementById('header_educa2').onclick = function(){
    window.scrollTo({
        top: 2100,
        behavior: 'smooth'
    });
}

document.getElementById('header_certificado').onclick = function(){
    window.scrollTo({
        top: 3500,
        behavior: 'smooth'
    });
}

document.getElementById('header_certificado2').onclick = function(){
    window.scrollTo({
        top: 3000,
        behavior: 'smooth'
    });
}



/* ------------ educaçao ------------ */

var naoseletorcor = "#646872";
var seletorcor = "#2A2D34";


var sessao1 =  document.getElementById('body_texto');
var texto1 =  document.getElementById('formaçao');
var sessao2 =  document.getElementById('body_texto2');
var texto2 =  document.getElementById('skills');

texto2.onclick = function(){
    sessao1.style.display = "none";
    sessao2.style.display = "block";
    texto1.style['background-color'] = naoseletorcor;
    texto2.style['background-color'] = seletorcor;
}


texto1.onclick = function(){
    sessao2.style.display = "none";
    sessao1.style.display = "grid";
    texto2.style['background-color'] = naoseletorcor;
    texto1.style['background-color'] = seletorcor;
}


//------------------ FOOTER ------------------------------

var ano_atual = new Date;
ano_atual = ano_atual.getFullYear();
document.getElementById('year').innerHTML = ano_atual;