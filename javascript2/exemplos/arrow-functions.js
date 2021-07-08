
// com return com bloco
const sayHello = (name, idade) => {
    return `Hello ${name} Voce tem ${idade}`;
}

console.log(sayHello("Mari",20));

// sem return com uma só linha e sem bloco
const sayHello2 = (name, idade) => `Hello ${name} Voce tem ${idade}`;

console.log(sayHello2("Juca",27));
