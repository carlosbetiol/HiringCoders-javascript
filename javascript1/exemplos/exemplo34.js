function resultadoAluno( nota1, nota2, nota3 ) {
    if (typeof nota1 != "number" || typeof nota2 != "number" || typeof nota3 != "number") {
        return "um ou mais valores inválidos para os parâmetros de notas";
    }
    else {
        let media = (nota1 + nota2 + nota3) / 3;

        if (media>=7) {
            return "Aprovado";
        }
        else if(media>=5){
            return "Recuperacao";
        } else {
            return "Reprovado";
        }
    }
}

let result = resultadoAluno(7.8,7.0,0.1);
console.log(`O aluno foi ${result}.`)
