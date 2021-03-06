{
    /*
    * JavaScript
    * Primitive: number, string, boolean, bigint, symbol, null, undefined
    * Object: function, array....
    * */

    // number
    const num:number = -6;

    // string
    const str:string = 'hello';

    // boolean
    const boal:boolean = false;

    // undefined
    let name: undefined; // no
    let age: number | undefined // |(or)
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return undefined;
    }

    // null
    let person:null; // no
    let person2: string | null;

    // unknown π©

    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any π©
    let anything: any = 0;
    anything = 'hello';

    // void - ν¨μμμ μ΄λ€ κ²μ λ¦¬ν΄νμ§ μμ λ μ¬μ©, μλ΅λ κ°λ₯νμ§λ§ νμ¬ κ·μΉμ λ°λ¦
    function print():void { //μ΄λ€ κ²μ μΆλ ₯λ§νκ³  μλ¬΄λ° κ²λ λ¦¬ν΄νμ§ μλ ννλΉ κ°
        console.log('hello');
    }
    // λ³μμ μ μΈμμ μ°λ κ²½μ°λ κ·Ήν λλ­
    let unusable: void = undefined; // π©

    //never - μλ¬λ₯Ό λμ§κ±°λ λ¦¬ν΄λμ§ μλ κ²½μ°
    function throwError(message: string):never {
        //message -> server (log)
        throw new Error(message);
        while (true) {}
    }
    let neverEnding: never; // π©

    //object - μμ νμμ μ μΈν λͺ¨λ  object νμμ ν λΉν  μ μμ
    let obj: object; // π©
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({name: 'noh'});
    acceptSomeObject({animal: 'dog'});
}