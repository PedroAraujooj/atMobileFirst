import { faker } from '@faker-js/faker';

export function carregarLista(setLista){
    const produtos = new Array(10).fill().map(() => {
        let produto = {};
        produto.nome = faker.lorem.word();
        produto.descricao = faker.lorem.sentence({ min: 2, max: 3 });
        produto.preco = faker.commerce.price();
        return produto;
      });

    setLista(produtos);
}

export function addProduto(produto, lista, setLista){
    setLista([produto, ...lista]);
}