import { faker } from '@faker-js/faker';

export function carregarLista(setLista){
    const produtos = new Array(10).fill().map(() => {
        let produto = {};
        produto.nome = faker.commerce.productName();
        produto.descricao = faker.commerce.productDescription();
        produto.preco = faker.commerce.price();
        return produto;
      });

    setLista(produtos);
}

export function addProduto(produto, lista, setLista){
    setLista([produto, ...lista]);
}