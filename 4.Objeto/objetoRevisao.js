const produto = new Object;
produto.nome = "Cadeira";
produto['marca do produto'] = 'Genérica';
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'Ferrari',
    valor: 250000,
    proprietario: {
        nome: 'Joelton',
        idade: 29,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Helton',
        idade: 18
    },{
        nome: 'Marly',
        idade: 55
    }],
    calcularValorSeguro: function(){
        //
    }
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av. Brasil';
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores);