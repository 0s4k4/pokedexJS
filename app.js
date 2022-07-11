//OBJETOS DOOM
const mainScreen = document.querySelector('.main-screen');
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeFrontImage = document.querySelector('.poke-front-image');
const pokeBackImage = document.querySelector('.poke-back-image');
const pokeTypeOne = document.querySelector('.poke-type.one');
const pokeTypeTwo = document.querySelector('.poke-type-two');
const pokeWeight = document.querySelector('.poke-weight');
const pokeHeight = document.querySelector('.poke-height');
const pokeListItems = document.querySelector('.list-items');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

///consntante y variables
const TYPES = [
    'normal','fighting','flying',
    'poison','ground','rock',
    'bug','water','steel',
    'electric','psychic','ice',
    'dragon','dark','fairy'
];

let preUrl = null;
let netUrl = null;

//funciones
const capitalize = (str) => str[0].toUpperCase() + str.substr(1);