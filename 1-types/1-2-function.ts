{
    // // JavaScript 💩
    // function jsAdd(num1, num2) {
    //     return num1 + num2
    // }
    // // TypeScript ✨
    // function add(num1:number, num2:number):number {
    //     return num1 + num2
    // }
    //
    // // JavaScript 💩
    // function jsFetchNum(id) {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(2000);
    //     })
    // }
    // // TypeScript ✨
    // function fetchNum(id:string): Promise<number> {
    //     // code ...
    //     // code ...
    //     // code ...
    //     return new Promise((resolve, reject) => {
    //         resolve(2000);
    //     })
    // }

    // JavaScript ✨ => TypeScript
    // JS 에서도 사용이 가능하고 TS 에서 더 활용도를 높일 수 있는 타입이 더해진 함수

    // 1. Optional parameter =>> ??????
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    // 이러한 상황에서 오류없이 사용하고 싶다 => ? => 전달해도되고 안해도된다
    // string | undefined으로 사용할 경우는 ?와는 다르게 undefined라고 명시를 해줘야함
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