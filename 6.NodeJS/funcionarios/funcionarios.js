const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

//1. Mulher chinesa com o menor salário.
const getCountry = e => e.pais === 'China';
const getGenere = g => g.genero === 'F';
const getMinSalary = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func: funcAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data;
    
    const resultado = funcionarios.filter(getCountry).filter(getGenere).reduce(getMinSalary);
    console.log(resultado);
});
