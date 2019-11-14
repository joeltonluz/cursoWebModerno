function criarProduto (Nome, Preco) {
    return {
        Nome,
        Preco,
        Desconto: 0.1 // Valor Padrão
    }
}

console.log(criarProduto("Monitor LG", 459.59));
console.log(criarProduto("Mouse HyperX", 59.59, 100));