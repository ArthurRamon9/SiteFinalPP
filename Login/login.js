const botao = document.getElementById('botao');

botao.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '../Forum/forum.html';
});