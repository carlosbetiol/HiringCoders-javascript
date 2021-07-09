const alunasGama = ["Paula", "Maria", "Estela", "Clara"]

console.log(alunasGama[2]);

// operador spread (...)

const alunasXp = [...alunasGama, "Simara"]

console.log(alunasXp);

// metodos de iteracao

for (let i=0;i<alunasXp.length;i++) {
    console.log(alunasXp[i]);
}

// nao modifica o array anterior
alunasXp.map( aluna => console.log(aluna));

//filter nao modifica array original
const numeros = [34, 45, 67, 90, 55, 76];

const numerosImpares = numeros.filter(numero => numero%2 != 0);

console.log(numerosImpares);

const numerosPares = numeros.filter(numero => numero%2 == 0);

console.log(numerosPares);

// sort altera o array original
const numerosOrdenadosCrescente = numeros.sort();
console.log(numerosOrdenadosCrescente);

const numerosOrdenadosDescrescente = numeros.sort((a,b)=>b-a);
console.log(numerosOrdenadosDescrescente);

// array original foi alterado nos comandos acima
console.log(numeros);

// reduce - reduz nosso array a um resultado de uma operacao matematica

const numbers = [1, 34, 35];

// const soma = numbers.reduce((valorAnterior, valorAtual)=> {
//     return valorAnterior + valorAtual
// }, 5);

// console.log(soma);

// aqui é o mesmo acima, porem mais contraido a array function
const soma = numbers.reduce((valorAnterior, valorAtual)=> valorAnterior + valorAtual, 5);

console.log(soma);






