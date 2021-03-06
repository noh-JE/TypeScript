{
    // // JavaScript π©
    // function jsAdd(num1, num2) {
    //     return num1 + num2
    // }
    // // TypeScript β¨
    // function add(num1:number, num2:number):number {
    //     return num1 + num2
    // }
    //
    // // JavaScript π©
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(2000);
    //     })
    // }
    // // TypeScript β¨
    // function fetchNum(id:string): Promise<number> {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(2000);
    //     })
    // }

    // JavaScript β¨ => TypeScript
    // JS μμλ μ¬μ©μ΄ κ°λ₯νκ³  TS μμ λ νμ©λλ₯Ό λμΌ μ μλ νμμ΄ λν΄μ§ ν¨μ

    // 1. Optional parameter =>> ??????
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    // μ΄λ¬ν μν©μμ μ€λ₯μμ΄ μ¬μ©νκ³  μΆλ€ => ? => μ λ¬ν΄λλκ³  μν΄λλλ€
    // string | undefinedμΌλ‘ μ¬μ©ν  κ²½μ°λ ?μλ λ€λ₯΄κ² undefinedλΌκ³  λͺμλ₯Ό ν΄μ€μΌν¨
    printName('Steve', 'Jobs');
    printName('Ellie'); // results) Ellie undefined
    printName('Ellie', undefined);

    // 2. Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    // 3. Rest parameter
    function addNumbers(...numbers: number[]):number {
        return numbers.reduce((a,b) => a + b);
    }
    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3,4));
    console.log(addNumbers(1,2,3,4,5,6));
}