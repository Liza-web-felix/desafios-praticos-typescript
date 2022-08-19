// Como podemos melhorar esse código usando TS? 
/*
let pessoa1 = {};
pessoa1.nome = "Luiza";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "Pedro";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "Luana",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome: "José",
    idade: 19,
    profissao: "padeiro"
}*/
enum Trabalho {
    Atriz,
    Padeiro,
    Juiza
}

interface Pessoa  {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let p1: Pessoa = {
    nome: 'Luiza',
    idade: 29,
    profissao: Trabalho.Atriz
};

let p2: Pessoa = {
    nome: 'Pedro',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let p3: Pessoa = {
    nome: 'Luana',
    idade: 32,
    profissao: Trabalho.Juiza
};

let p4: Pessoa = {
    nome: "José",
    idade: 19,
    profissao: Trabalho.Padeiro
}

console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)