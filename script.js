let exemplo = [[5,3,0,0,7,0,0,0,0],
                [6,0,0,1,9,5,0,0,0],
                [0,9,8,0,0,0,0,6,0],
                [8,0,0,0,6,0,0,0,3],
                [4,0,0,8,0,3,0,0,1],
                [7,0,0,0,2,0,0,0,6],
                [0,6,0,0,0,0,2,8,0],
                [0,0,0,4,1,9,0,0,5],
                [0,0,0,0,8,0,0,7,9]]

function cria_inputs(linha){
    let conteudo_linha = ""
    for(valor of linha){
        if (valor == 0){
            conteudo_linha += `<input type="number" value="${valor}">`
        }else{
            conteudo_linha += `<input type="number" value="${valor}" readonly>`
        }
    }
    
    return conteudo_linha
}

function start(){
    div_sudoku = document.getElementById('sudoku')
    for (linha of exemplo){
        div_sudoku.innerHTML += `<div> ${cria_inputs(linha)} </div>` 
    }
}

function corrigir(){
    let inputs = document.querySelectorAll("input");
    let resposta = []
    for (input of inputs){
        resposta.push(input.valueAsNumber)
    }
    console.log(resposta)
}