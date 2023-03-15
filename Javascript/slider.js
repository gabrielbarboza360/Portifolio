
$(function(){

     $(".slide-certificado").slick({
         infinite: true,
         slidesToShow: 3,
         slidesToScroll:1,
         centerMode:true,
         prevArrow: $("#botao2"), // coloco a funçao no botao de rolar para frente
         nextArrow: $("#botao1"), // coloco a funçao no botao de rolar para tras
         responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1
              }
            }
          ]
     })


})



function click1(){ document.getElementById('zoom1').style.display = "block";}
function fechar1(){
   document.getElementById('zoom1').style.display = "none";

}

function click2(){document.getElementById('zoom2').style.display = "block";}
function fechar2(){
   document.getElementById('zoom2').style.display = "none";

}

function click3(){document.getElementById('zoom3').style.display = "block";}
function fechar3(){
   document.getElementById('zoom3').style.display = "none";

}

function click4(){document.getElementById('zoom4').style.display = "block";}
function fechar4(){
   document.getElementById('zoom4').style.display = "none";

}

function click5(){document.getElementById('zoom5').style.display = "block";}
function fechar5(){
   document.getElementById('zoom5').style.display = "none";

}

function click6(){document.getElementById('zoom6').style.display = "block";}
function fechar6(){
   document.getElementById('zoom6').style.display = "none";

}

function click7(){document.getElementById('zoom7').style.display = "block";}
function fechar7(){
   document.getElementById('zoom7').style.display = "none";

}

function click8(){document.getElementById('zoom8').style.display = "block";}
function fechar8(){
   document.getElementById('zoom8').style.display = "none";

}