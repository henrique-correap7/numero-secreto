let numerosSorteados = [];
let numeroLimite = 30;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function mensagensPrincipal () {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`); 
}

mensagensPrincipal()


function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativas = tentativas > 1? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
    if(chute==numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(chute>numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');

        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
    }tentativas++; limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*numeroLimite + 1);
    let quantidadeDeElemntosNaLista = numerosSorteados.length;
    if(quantidadeDeElemntosNaLista == numeroLimite){
        numerosSorteados =[]
    }

    if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
        
    } else {
        numerosSorteados.push(numeroEscolhido)
        console.log(numerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute= document.querySelector('input');
    chute.value = '';
}



function reiniciarJogo (){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagensPrincipal();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}



