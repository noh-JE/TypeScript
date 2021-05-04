{
    /*
    * Type Assertions 💩
    * */
    function jsStrFunc(): any {
        return 34;
    }
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong:any = 5;
    console.log((wrong as Array<number>).push(1)); // 😱

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2); // 😱, ! 는 무조건 null은 아니야라고 의미하는 것

    const button = document.querySelector('class');
    if(button) {
        button.nodeValue;
    }
}