const pilotos = ['Vettel','Alonso','Raikkonen','Massa'];
pilotos.pop();  //remove ultimo elemnto
console.log(pilotos);

pilotos.push('Versatappen'); //adiciona na ultima posição
console.log(pilotos);

pilotos.shift(); // remove o primeiro
console.log(pilotos);

pilotos.unshift('Hamilton'); //adiciona na pirmeira posição
console.log(pilotos);

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bootas','Massa');
console.log(pilotos);

//remover
pilotos.splice(3,1)
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) //pega array a partir do indice indicado
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
//const algunsPilotos2 = pilotos.slice(1, pilotos.length());
console.log(algunsPilotos2);