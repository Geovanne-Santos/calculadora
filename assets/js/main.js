const temaBtn = document.querySelector('.theme-toggle');

$(document).ready(function() {
    $(temaBtn).click(function() {
        $('.calculator').toggleClass('dark');
    });
});


const hamburgerBtn = document.querySelector('.burguer-container');

const sideMenu = document.querySelector('.side-menu');

$(document).ready(function() {
    $(hamburgerBtn).click(function() {
        $(this).toggleClass('active');
        $(sideMenu).toggleClass('active');
    });
});



let multiplicar, dividir, limpar, deleta, mais, virgula
multiplicar = document.getElementById('*')
dividir = document.getElementById('/')
limpar = document.getElementById('limpar')
deleta = document.getElementById('delete') 
mais = document.getElementById('+')
virgula = document.getElementById(',')


const numbers = document.querySelectorAll('.btn-number')

const tela = document.getElementById('display')


