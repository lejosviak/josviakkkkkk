function criaCartao (categoria, pergunta, resposta){ 
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML =`
    <div class="conteudo-cartao" onclik="viraCartao(this)">
        <h3> ${categoria}</h3>
        <div class="pergunta-cartao">
        <p> ${pergunta}</p>
    </div>
        <div class="resposta-cartao">
        <p>${resposta}</p>
    </div>
    `

    container.appendChild(cartao);
    }

     function viraCartao(card){
    const resposta = card.querySelector('.resposta-cartao');

    if (resposta.style.display==='none'){
        resposta.style.display = 'block';
    }
    else {
     resposta.style.display = 'none'
    }

     }
