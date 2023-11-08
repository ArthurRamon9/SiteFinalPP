const botao = document.getElementById('botao');

botao.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '../login/login.html';
});

const apiKey = '0cb9d57e369508bb1b1328c84535ccd4';
const apiUrl = 'https://www12.senado.leg.br/noticias/materias/2023/07/12/cct-dara-enfase-a-nanotecnologia-e-a-industria-farmaceutica'; // Substitua 'URL_DA_API_DE_NOTICIAS' pela URL real da API que você deseja usar.

fetch(apiUrl, {
    method: 'GET',
    headers: {
        'X-API-Key': apiKey
    }
})
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Erro na solicitação da API de notícias');
        }
    })
    .then(data => {
        // Faça algo com os dados da API, por exemplo, exiba as notícias na sua página.
        console.log(data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
''