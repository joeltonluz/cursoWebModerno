console.log(typeof Array, typeof new Array, typeof []); //Função - Objeto - Objeto

let aprovados = new Array('Bia', 'carlos', 'Ana');
console.log(aprovados);

aprovados =  ['Bia','Carlos','Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados[3]='Paulo';
console.log(aprovados[3]);
aprovados.push('Abgail');
console.log(aprovados.length);

aprovados[9]='Rafael';
console.log(aprovados.length);
console.log(aprovados);

aprovados.sort();
console.log(aprovados);

delete aprovados[1];
console.log(aprovados[0]);
console.log(aprovados[1]);

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 2, 'Elemento1','Elemento2');
console.log(aprovados);
