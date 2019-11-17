const nums = [1, 2, 3, 4, 5];

// Map = For com propósito.
let resultado = nums.map(function(e) {
    return e * 2;
});
let resultadoArrowFunc = nums.map(e => e * 3); //não precisa de return
console.log(nums);
console.log(resultado);
console.log(resultadoArrowFunc);

const soma10 = e => e+ 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);