import './sass/main.scss';
import renderProduct from './page/vitrine/createProductList.js';

const products = require("./data/products.json");
let element = document.getElementById('content');

renderProduct(products,element);

/*
console.info('Hello World ! Webpack');
const hey = 'Heyyy';
console.log(`${hey} webpack funcionando!`);

*/