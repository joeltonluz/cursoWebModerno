// não aceita repitção / não indexada
const times = new Set();
times.add('Cruzeiro');
times.add('São Paulo').add('Palmeiras').add('Corinthians');
times.add('Cruzeiro');
times.add('Flamengo');

console.log(times);
console.log(times.size);
console.log(times.has('Cruzeiro'));
times.delete('Flamengo');
console.log(times.has('Flamengo'));

const nomes = ['Raquel', 'Lucas', 'Júlia', 'Lucas'];
const nomesSet = new Set(nomes);
console.log(nomesSet);