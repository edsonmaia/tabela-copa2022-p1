let grupos = []
let selecoes = []

let letraDoGrupo = document.querySelector('.letraDoGrupo').value
let tituloGrupo = document.querySelector('.tituloGrupo')
let listaGrupo = document.querySelector('.listaGrupo')

const verGrupos = (letraDoGrupo) => {
    fetch('./grupos.json')
    .then( response => response.json() )
    .then( dados => {
        console.log(dados)
        tituloGrupo.innerHTML = `Grupo ${dados[letraDoGrupo].grupo}`
        listaGrupo.innerHTML = `
            <li>${dados[letraDoGrupo].selecao1}</li>
            <li>${dados[letraDoGrupo].selecao2}</li>
            <li>${dados[letraDoGrupo].selecao3}</li>
            <li>${dados[letraDoGrupo].selecao4}</li>
        `
    })
}

verGrupos(letraDoGrupo)
