## Catálogo de Produtos

* Lista produtos;
* Adiciona e remove produtos no carrinho;
* Visualiza os produtos na sacola;
* Persiste os produtos após reload da página.

## GitHub Pages

[Link](https://silvanoamaral.github.io/catalogoProduto/)

## Utilizamos no projeto

* HTML
* CSS / SASS
* Javascript / ES6
* Webpack
* NodeJS 

## Project Structure
```
├── index.html
├── package.json
├── src
│   ├── data
│   │   └── products.json
│   ├── sass
│   │   └── vars.scss
│   │   └── main.scss
│   └── app.js
├── webpack.config.js
```

* `index.html` file main
* `src/app.js` contains all our cool JavaScript code
* `package.json` defines our dependencies
* `src/sass/main.scss` is our scss / sass entry point
* `webpack.config.js` is our config that tells webpack what to do

## Instalação do projeto

* Clone o repositório na sua máquina: https://github.com/silvanoamaral/catalogoProduto.git;
* Entre na pasta `cd catalogoProduto`;
* Digite o comando `npm install` para instalar as dependências.

## Gerando o bundle

* O comando `npm run build` irá executar o webpack, que vai olhar o arquivo de configuração e gerar o bundle.js, que contém todo o código da aplicação e das dependências.

## Watch

* O comando `npm run build:watch` vai ficar observando os arquivos e reconstruir o bundle.js sempre que houver alguma alteração.
