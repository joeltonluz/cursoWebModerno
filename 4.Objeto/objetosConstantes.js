const pessoa = { nome: 'João' };
pessoa.nome = 'Pedro';
console.log(pessoa);

Object.freeze(pessoa); // Congela o objeto, você não consegue editar, alterar !!!
pessoa.nome = 'Maria';
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'Jão'}); // Jà cria o objeto congelado
console.log(pessoaConstante);