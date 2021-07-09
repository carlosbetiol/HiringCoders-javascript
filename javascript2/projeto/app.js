// no database.js foi exportado livros e esta linha abaixo faz o uso dele
// pegar input
// Se for sim, mostra as categorias disponiveis, pergunta qual escolhe
// Se nao, mostra todas os livros em ordem crescente de numero de paginas

const livros = require('./database');
const readline = require('readline-sync');

const entradaInicial = readline.question('Deseja buscar um livro? S/N');

if(entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas sao as categorias disponiveis:');
    console.log('Produtividade', '/História', '/Américas', '/Estilo de vida', 
    '/Tecnologia');

    const entradaCategoria = readline.question("Qual categoria voce escolhe: ");

    const retorno = livros.filter(livro => livro.categoria == entradaCategoria);

    console.table(retorno);

} else {

    const livrosOrdenados = livros.sort((a,b)=>a.paginas - b.paginas);
    console.log("Essas são todos os livros disponiveis: ")
    console.table(livrosOrdenados);
}
