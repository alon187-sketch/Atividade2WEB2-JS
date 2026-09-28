const produtos = ['Arroz', 'Feijão', 'Macarrão', 'Refrigerante'];

const caixa = {
    'Arroz': 7.10,
    'Feijão': 2.30,
    'Macarrão': 4.70,
    'Refrigerante': 3.00
};

const fretes = {
    'São Paulo': 10.10,
    'Rio de Janeiro': 12.30,
    'Brasília': 14.70,
    'Outros': 13.00
};

function calculaValorTotalDaCompra(produtos, cidade, caixa, fretes) {
    const valores = produtos.map((function(produto) {return caixa[produto];}));

    const totalProdutos = valores.reduce((total, valor) => total + valor, 0);

    const frete = fretes[cidade] ?? fretes['Outros'];

    return totalProdutos + frete;
}

console.log(calculaValorTotalDaCompra(produtos, 'São Paulo', caixa, fretes));
console.log(calculaValorTotalDaCompra(produtos, 'Outros', caixa, fretes));