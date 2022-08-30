const home = document.querySelector('.home');
const projetos = document.querySelector('.projetos');
const contato = document.querySelector('.contato');
const homePage = document.querySelector('.home-page');
const projPage = document.querySelector('.projetos-page');
const cttPage = document.querySelector('.contato-page');
const selectHome = document.querySelector('.home-a');
const selectProj = document.querySelector('.proj-a');
const selectContato = document.querySelector('.contato-a');

function getGuias () {
  
      selectHome.classList.add('inicio-a');
      homePage.classList.add('inicio');
  
  home.addEventListener('click', function(){
    
    selectHome.classList.add('select-on');
    selectProj.classList.remove('select-on');
    selectContato.classList.remove('select-on');
    
    homePage.classList.add('not');
    projPage.classList.remove('not');
    cttPage.classList.remove('not');
    
    selectHome.classList.remove('inicio-a');
    homePage.classList.remove('inicio');
    
  })
  projetos.addEventListener('click', function(){
    
    selectProj.classList.add('select-on');
    selectContato.classList.remove('select-on');
    selectHome.classList.remove('select-on');


    projPage.classList.add('not');
    cttPage.classList.remove('not');
    homePage.classList.remove('not');

    selectHome.classList.remove('inicio-a');
    homePage.classList.remove('inicio');
  })
  
  contato.addEventListener('click', function(){
    
    selectContato.classList.add('select-on');
    selectHome.classList.remove('select-on');
    selectProj.classList.remove('select-on');

    cttPage.classList.add('not');
    homePage.classList.remove('not');
    projPage.classList.remove('not');

    selectHome.classList.remove('inicio-a');
    homePage.classList.remove('inicio');
  })
}
getGuias();

function getMenuMobile () {

const atalhosRedes = document.querySelector('.atalhos-redes');
const guias = document.querySelector('.guias');
const btnMobile = document.querySelector('#btn-mobile');
 const btnMobilex = document.querySelector('#btn-mobilex');

btnMobile.addEventListener('click', function(){
  atalhosRedes.classList.add('redes-mobile');
  guias.classList.add('menu-mobile');
  btnMobile.classList.add('disable');
  btnMobilex.classList.add('active');
});
btnMobilex.addEventListener('click', function(){
  atalhosRedes.classList.remove('redes-mobile');
  guias.classList.remove('menu-mobile');
  btnMobilex.classList.remove('active');
  btnMobile.classList.remove('disable');
})
}
getMenuMobile();