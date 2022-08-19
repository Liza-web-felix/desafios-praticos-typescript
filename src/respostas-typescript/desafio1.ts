// Como podemos rodar isso em um arquivo .ts sem causar erros? 
/*
let employee = {};
employee.code = 10;
employee.name = "John";*/

const Employee = {
    code: 10,
    name: 'John'
};

// Resposta 2
const employee2: {code: number, name: string} = {
    code: 10,
    name: 'John'
}

// Respostas 3 e 4
interface Employee {  // Já conhece interfaces? https://blog.logrocket.com/types-vs-interfaces-in-typescript/
    code: number,
    name: string
};

const employeeObj = {} as Employee;
employeeObj.code = 10;
employeeObj.name = 'John';

const employeeObj2: Employee = {
    code: 10,
    name: 'John'
}