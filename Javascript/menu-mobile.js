// Atulização 11/03/2023


const btnMobile = document.querySelector("#btnMobile");
const btnMobileClose = document.querySelector("#btnMobileClose");
const interfaceMenu = document.querySelector(".interface_menu");
const logoFacebook = document.querySelector("#facebook");
const logoInst = document.querySelector("#inst");
const logoGit = document.querySelector("#git");
const logoIn = document.querySelector("#in");


//Evento

const OpenMenuMobile = () =>{
  interfaceMenu.classList.add("interfaceMenuOpen");
  btnMobile.classList.add("btnMobileOpen");
}

const CloseMenuMobile = () =>{
  interfaceMenu.classList.remove("interfaceMenuOpen");
  btnMobile.classList.remove("btnMobileOpen");
}


//Funçoes

btnMobile.addEventListener("click", (e) =>{

   e.preventDefault();
      OpenMenuMobile();
});

btnMobileClose.addEventListener("click", (e) =>{
     e.preventDefault();
     CloseMenuMobile();
})



logoFacebook.addEventListener("mousemove", (e) =>{
  logoFacebook.src = "imagem/facebookteste.png";
})

logoFacebook.addEventListener("mouseout", (e) =>{
  logoFacebook.src = "imagem/facebook.png";
})

logoInst.addEventListener("mousemove", (e) =>{
   logoInst.src = "imagem/inst1.png";
})

logoInst.addEventListener("mouseout", (e) =>{
  logoInst.src = "imagem/inst.png";
})


logoGit.addEventListener("mousemove", (e) =>{
  logoGit.src = "imagem/git1.png";
})

logoGit.addEventListener("mouseout", (e) =>{
 logoGit.src = "imagem/git.png";
})

logoIn.addEventListener("mousemove", (e) =>{
  logoIn.src = "imagem/in1.png";
})

logoIn.addEventListener("mouseout", (e) =>{
 logoIn.src = "imagem/in.png";
})



