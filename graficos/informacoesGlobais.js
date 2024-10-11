const url = 'https://raw.github.content.com/guilhermeonrails/api/main/dados-globai.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch (url);
    const dados = res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
}
vizualizarInformacoesGlobais()