botao = document.querySelector('button') // Procura no file o primeiro botão q aparecer
inputs = document.querySelectorAll('input') // Seleciona todos os inputs
localParaAdicionar = document.querySelector('table')

botao.addEventListener('click', adicionar) // Fica em análise constante

function adicionar() {
    dadosAdicionados = [] // aqui dentro tem os valores dos tres inputs!

    inputs.forEach(element => {
        dadosAdicionados.push(element.value) // value pega o valor q tem dentro desse input
                                             // .push é o .append do JavaScript
    });
    // ${} é o .format do javaScript

    if (!dadosAdicionados[0] == '' && !dadosAdicionados[1] == '' && !dadosAdicionados[2] == '') {
        // "!" = != , "or" = || , "and" = &&
        //se tiver diferente de vazio
        var row = localParaAdicionar.insertRow(1)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        row.insertCell(3)
    
        cell1.innerHTML = dadosAdicionados[0]
        cell2.innerHTML = dadosAdicionados[1]
        cell3.innerHTML = dadosAdicionados[2]
    
        inputs.forEach(element => {
            element.value = '' //depois de adicionado, limpar o input
        });
    
    }

}
