// Usando a notação literal
const obj1 = {};
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object;
console.log(obj2);

// Funções construtores
function Produto(nome, preco, desconto) {
    this.nome = nome // Variável pública
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto);
    }
};
const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2997.23, 0.25);
console.log(`Produto: ${p1.nome} no valor de R$ ${p1.getPrecoComDesconto()}`);
console.log(`Produto: ${p2.nome} no valor de R$ ${p2.getPrecoComDesconto()}`);

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}
const f1 = criarFuncionario('João', 7980, 4);
const f2 = criarFuncionario('Maria', 2304,1);
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);