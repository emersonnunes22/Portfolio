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

const guias = document.querySelector('.guias');
const btnMobile = document.querySelector('#btn-mobile');
 const btnMobilex = document.querySelector('#btn-mobilex');
 const spanBtnMobile = document.querySelector('.span-btn-mobile');
 const spanBtnMobilex = document.querySelector('.span-btn-mobilex')

btnMobile.addEventListener('click', function(){
  guias.classList.add('menu-mobile');
  spanBtnMobile.classList.add('disable');
  spanBtnMobilex.classList.add('active');
});
btnMobilex.addEventListener('click', function(){
  guias.classList.remove('menu-mobile');
  spanBtnMobilex.classList.remove('active');
  spanBtnMobile.classList.remove('disable');
})
}
getMenuMobile();