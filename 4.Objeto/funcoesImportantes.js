const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 12
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '14/08/2017'
});

pessoa.dataNascimento = '15/08/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2};
const o2 = { c: 3, d: 4};
const obj = Object.assign(dest, o1, o2);
console.log(dest);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);