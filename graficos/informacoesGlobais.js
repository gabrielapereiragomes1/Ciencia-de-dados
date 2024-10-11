const url = 'https://raw.github.content.com/guilhermeonrails/api/main/dados-globai.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch (url);
    const dados = res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que estão aproximadamente ${dados.total_pessoa_conectadas} estão conectada em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`
    console.log(paragrafo)

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}
vizualizarInformacoesGlobais()