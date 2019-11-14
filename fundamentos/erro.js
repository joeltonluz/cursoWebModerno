function tratarErroLancar(erro) {
    //throw new Error("...");
    throw "Vish, deu erro ai raapz";
}

function imprimirNomeGritado (obj) {
    try {
        console.log(obj.name.toUpperCase()+ "!!!");
    } catch (e) {
        tratarErroLancar(e)
    } finally {
        console.log("Finalizeiiiiiiiiii")
    }

}

const obj = {nam: "Roberto"}
imprimirNomeGritado(obj);