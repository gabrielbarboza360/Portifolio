
// acionamento do menu
document.getElementById('btn_mobile').onclick = function(){
      document.getElementById('interface_menu').style.left = "130px";
      document.getElementById('btn_mobile').style.display = "none";  
  }
  
  document.getElementById('botao_fechar').onclick = function(){
        document.getElementById('interface_menu').style.left = "-330px";
        document.getElementById('btn_mobile').style.display = "block";
  }
  
  // mudança de imagem (redes) dentro do menu
  
    document.getElementById('facebook').onmousemove = function(){
         document.getElementById('facebook').src = "imagem/facebookteste.png";
    }
  
    document.getElementById('facebook').onmouseout = function(){
       document.getElementById('facebook').src = "imagem/facebook.png" ;
    }
  
    document.getElementById('inst').onmousemove = function(){
      document.getElementById('inst').src = "imagem/inst1.png";
  }
  
  document.getElementById('inst').onmouseout = function(){
    document.getElementById('inst').src = "imagem/inst.png" ;
  }
  
  document.getElementById('git').onmousemove = function(){
      document.getElementById('git').src = "imagem/git1.png";
  }
  
  document.getElementById('git').onmouseout = function(){
    document.getElementById('git').src = "imagem/git.png" ;
  }
  
  document.getElementById('in').onmousemove = function(){
      document.getElementById('in').src = "imagem/in1.png";
  }
  
  document.getElementById('in').onmouseout = function(){
    document.getElementById('in').src = "imagem/in.png" ;
  }