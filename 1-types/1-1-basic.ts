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

    // unknown 💩

    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any 💩
    let anything: any = 0;
    anything = 'hello';

    // void - 함수에서 어떤 것을 리턴하지 않을 때 사용, 생략도 가능하지만 회사 규칙에 따름
    function print():void { //어떤 것을 출력만하고 아무런 것도 리턴하지 않는 텅텅빈 값
        console.log('hello');
    }
    // 변수의 선언에서 쓰는 경우는 극히 드뭄
    let unusable: void = undefined; // 💩

    //never - 에러를 던지거나 리턴되지 않는 경우
    function throwError(message: string):never {
        //message -> server (log)
        throw new Error(message);
        while (true) {}
    }
    let neverEnding: never; // 💩

    //object - 원시 타입을 제외한 모든 object 타입을 할당할 수 있음
    let obj: object; // 💩
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({name: 'noh'});
    acceptSomeObject({animal: 'dog'});
}