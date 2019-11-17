const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];
aprovados.forEach(function(nome, indice) {  //Forearch é padrão os parametors (name, index e array);
    console.log(`${indice+1}) ${nome}`);
});

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);