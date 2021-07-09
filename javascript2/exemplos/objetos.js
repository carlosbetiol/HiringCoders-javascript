const pessoa = {
    nome: "Simara",
    idade: 32,
    cidade: "Sao Paulo"
}

//notacao de ponto
console.log(pessoa.nome) //"Simara"

//notacao de colchetes
console.log(pessoa["idade"]);

// forma q usa muito atualmente pq fica menos verbosa para acessar propriedades do objeto
// desestruturando objetos
// dai acessa diretamente a propriedade
const {nome, idade, cidade} = pessoa;

console.log(nome) //"Simara"
console.log(idade);
console.log(cidade);

