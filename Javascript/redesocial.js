
window.alert("ESTA EM MANUTENÇÂO");

window.alert("Site esta em manutençao, entao nao repare a bagunça");



// -------------------- movimento dos menus TOP -------------------

//--------- Atualização Funções Botao Navgueção Header 13/03/2023

const headerNav = document.querySelector("#nav");
const headerNavMobile = document.querySelector("#navMobile");

const btnSobre = document.querySelector("#header_sobre");
const btnSobreMobile = document.querySelector("#header_sobre_mobile");
const btnProjeto = document.querySelector("#header_projetos");
const btnProjetoMobile = document.querySelector("#header_projetos_mobile");
const btnEducaçao = document.querySelector("#header_educa");
const btnEducaçaoMobile = document.querySelector("#header_educa_mobile");
const btnCertificadoMobile = document.querySelector("#header_certificado_mobile");



headerNav.addEventListener("click", (e) =>{

     const target = e.target.id  
 
      if(target == btnSobre.id){
        window.scrollTo({
            top: 800,
            behavior: 'smooth'
        });
      }
      if(target == btnProjeto.id){
        window.scrollTo({
            top: 1440,
            behavior: 'smooth'
        });
      }
      if(target == btnEducaçao.id){
        window.scrollTo({
            top: 2600,
            behavior: 'smooth'
        });
      }
       if(target == btnCertificado.id){
        window.scrollTo({
            top: 4000,
            behavior: 'smooth'
        });
      }
   
});


headerNavMobile.addEventListener("click", (e) =>{
    
      const target = e.target.id

     if(target == btnSobreMobile.id){
        window.scrollTo({
            top: 600,
            behavior: 'smooth'
            
        } );
      } 

      if(target == btnProjetoMobile.id){
        window.scrollTo({
            top: 1350,
            behavior: 'smooth'
            
        } );
      }

      if(target == btnEducaçaoMobile.id){
        window.scrollTo({
            top: 3200,
            behavior: 'smooth'
        });
      }

      if(target == btnCertificadoMobile.id){
        window.scrollTo({
            top: 4800,
            behavior: 'smooth'
        });
      }

});






/* ------------ educaçao ------------ */

const btnFormaçao = document.querySelector("#formaçao")
const conteudoFormaçao = document.querySelector("#body_texto")
const btnSkills = document.querySelector("#skills")
const conteudoSkills = document.querySelector("#body_texto2")
const caixaTexto = document.querySelector(".caixa_texto");
const naoseletorcor = "#646872";
const seletorcor = "#2A2D34";



btnFormaçao.addEventListener("click", (e) =>{
    conteudoFormaçao.style.display = "block";
    conteudoSkills.style.display = "none";
    btnSkills.style['background-color'] = naoseletorcor;
    btnFormaçao.style['background-color'] = seletorcor;
    caixaTexto.style.height = "950px";


});


btnSkills.addEventListener("click", (e) =>{
    conteudoFormaçao.style.display = "none";
    conteudoSkills.style.display = "block";
    btnSkills.style['background-color'] = seletorcor;
    btnFormaçao.style['background-color'] = naoseletorcor;
    caixaTexto.style.height = "615px"

});

//------------------ FOOTER ------------------------------

var ano_atual = new Date;
ano_atual = ano_atual.getFullYear();
document.getElementById('year').innerHTML = ano_atual;