import {sum, mult, parcel} from './math-functions.js';

function createProductList(obj){
    let vitrine = document.createElement('ul');

    obj.products.forEach(function(value){
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
                            <b>R$</b>${ parcel(value.price, value.installments) }                            
                        </span>                                    
                    </div>
                    <button type="button" class="btn btn-primary btn-comprar">Adicionar ao carrinho</button>
                </div>
            </li>
        `; 	
    });

    return vitrine;
}

/*
 *  Estou exportando somente a função renderProduct 
 *  deixando assim o método createProductList como privado, 
 *  assim não corro o risco da criação da lista ser poluído por outro código.
*/
export default function renderProduct(data, element) {
    const vitrine = createProductList(data);//Chama a função para montar nossa Lista de produto
    element.appendChild(vitrine);

    return data;
};