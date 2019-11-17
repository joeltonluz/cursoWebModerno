Array.prototype.filter2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
];

///Exercicios
const produtoCaro = produto => produto.preco > 2000;
const produtoFragil = produto => produto.fragil; //booleano não precisa de comparação.

const resultado = produtos.filter2(produtoCaro).filter2(produtoFragil);
console.log(resultado);