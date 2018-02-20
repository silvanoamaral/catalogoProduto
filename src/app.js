import './sass/main.scss';

const products = require("./data/products.json");

const divParcelas = (x, y) => {
	return (x / y).toFixed(2);
}

//console.dir(products.products[0].title);
let vitrine = document.createElement('ul');

products.products.forEach(function(value){
	vitrine.innerHTML += `
		<li>
			<div class="">
				<img src="./src/img/item-${ value.id }.jpg" alt="">
				<div class="">
                    ${ value.title } 
                </div>
                <div class="price-info">
                    <span class="price">                        	
                        <b>R$</b> 
                        <strong>
                            ${ value.price }
                        </strong>
                    </span>                    
                    <span class="parcel-price">
                        ou ${ value.installments }x
                        <b>R$</b>${ divParcelas(value.price, value.installments) }                            
                    </span>                                    
                </div>
                <button type="button" class="btn btn-primary btn-comprar">Adicionar ao carrinho</button>
            </div>
		</li>
	`; 	
});

//console.log(vitrine);

let content = document.getElementById('content');
content.appendChild(vitrine);

console.info('Hello World ! Webpack');

const hey = 'Heyyy';
console.log(`${hey} webpack funcionando!`);