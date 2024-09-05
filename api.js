//api.vagalume.com.br/docs/letras/
//chave vagalume: e0a07830773487088caa94342f94f1b5

const apiKey = 'e0a07830773487088caa94342f94f1b5'
const musicName = 'nome_da_musica'

fetch(
  `https://api.vagalume.com.br/search.php?art=${musicName}&apikey=${apiKey}`
)
  .then(response => response.json())
  .then(data => {
    const letra = data.mus[0].letras[0].letra
    const imagem = data.mus[0].art.img
    // Exiba a letra e a imagem na sua página
  })
  .catch(error => {
    console.error('Erro ao buscar a letra:', error)
  })
