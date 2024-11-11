function criaCartao (categoria, pergunta, resposta){ 
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML =`
    <div class="conteudo-cartao">
        <h3> ${categoria}</h3>
        <div class="pergunta-cartao">
        <p> ${pergunta}</p>
    </div>
        <div class="respostas-cartao">
        <p>${resposta}</p>
    </div>


let respostaEstaVisivel = false;

function viraCartao (){
    respostaEstavisivel = !respostaEtaVisivel;
    cartao.classList.toggle('active', respostaEstaVisivel)
    

    }
    cartao.eddEventListener('click', viraCartao)

    
    container.appendChild(cartao);
}