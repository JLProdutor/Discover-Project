/*Função Light-Dark Mode*/
function toggleMode() {
  /*Troca do esquema de cores*/
  const html = document.documentElement
  html.classList.toggle('light')

  /*Troca da foto de perfil*/
  const profileImg = document.querySelector("#profile img")
  if(html.classList.contains('light')) {
    profileImg.setAttribute('src', './assets/jl-light.png')
  } else {
    profileImg.setAttribute('src', './assets/jl-dark.png')
  }
}