const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' //Sem template string
const template = `
    Olá
    ${nome}!`

console.log(concatenacao)
console.log(template)

// expressoes
console.log(`1+1 = ${1 +1}`)

const up = texto => texto.toUpperCase() //Função simples
console.log(`Ei...${up('cuidado')}!`)