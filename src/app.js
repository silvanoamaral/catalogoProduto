import './sass/main.scss';
import renderProduct from './views/vitrine/createProductList.js';
import renderFooter from './views/footer/footerTemplate.js';

const products = require("./data/products.json");

const element = document.getElementById('content');

const elementFooter = document.getElementById('footer');

renderProduct(products,element);
renderFooter(elementFooter);

/*
console.info('Hello World ! Webpack');
const hey = 'Heyyy';
console.log(`${hey} webpack funcionando!`);

*/