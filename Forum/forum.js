document.addEventListener("DOMContentLoaded", function () {
    var containerPublicacoes = document.getElementById("container-publicacoes");
    var formularioPublicacao = document.getElementById("formulario-publicacao");
    var pesquisarInput = document.getElementById("pesquisar-input");
    var fotoUsuario = document.getElementById("foto-usuario-img");
    var botaoCadastro = document.querySelector(".botao-cadastro");

    var likeButton = null;
    var dislikeButton = null;

    formularioPublicacao.addEventListener("submit", function (e) {
        e.preventDefault();

        var nomeUsuarioInput = document.getElementById("nome-usuario");
        var mensagemInput = document.getElementById("mensagem");
        var selecaoPublicacao = document.getElementById("selecao-publicacao");

        var nomeUsuario = nomeUsuarioInput.value;
        var mensagem = mensagemInput.value;
        var publicacaoSelecionada = selecaoPublicacao.value;

        if (nomeUsuario && mensagem) {
            var publicacaoDiv = document.createElement("div");
            publicacaoDiv.className = "publicacao";

            var autorDiv = document.createElement("div");
            autorDiv.className = "autor";


            if (publicacaoSelecionada === "Professor") {
                autorDiv.innerHTML = nomeUsuario + " (<span style='color: blue;'>Professor</span>)";
            } else {
                autorDiv.innerHTML = nomeUsuario + " (<span>Aluno</span>)";
            }

            var conteudoDiv = document.createElement("div");
            conteudoDiv.className = "conteudo";
            conteudoDiv.textContent = mensagem;

            var dataDiv = document.createElement("div");
            dataDiv.className = "data";
            var dataAtual = new Date();
            dataDiv.textContent = "Postado em " + dataAtual.toLocaleDateString();

            publicacaoDiv.appendChild(autorDiv);
            publicacaoDiv.appendChild(conteudoDiv);
            publicacaoDiv.appendChild(dataDiv);

            // ...

            containerPublicacoes.appendChild(publicacaoDiv);

            nomeUsuarioInput.value = "";
            mensagemInput.value = "";
        }
    });

    pesquisarInput.addEventListener("input", function () {
        var termoPesquisa = pesquisarInput.value.toLowerCase();
        var publicacoes = containerPublicacoes.getElementsByClassName("publicacao");

        Array.from(publicacoes).forEach(function (publicacao) {
            var conteudo = publicacao.querySelector(".conteudo").textContent.toLowerCase();

            if (conteudo.includes(termoPesquisa)) {
                publicacao.style.display = "block";
            } else {
                publicacao.style.display = "none";
            }
        });
    });

    botaoCadastro.addEventListener("click", function () {
        console.log("Botão de cadastro clicado!");
    });

    fotoUsuario.addEventListener("click", function () {
        console.log("Foto de usuário clicada!");
    });
});

const login = document.getElementById('login');
login.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'login.html';
});

const ChatBot = document.getElementById('ChatBot');
ChatBot.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'ChatBot.html';
});
