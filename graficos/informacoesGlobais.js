
async function vizualizarInformacoesGlobais() {
    const res = await fetch (url);
    const dados = res. json()
    console.log(dados);
}