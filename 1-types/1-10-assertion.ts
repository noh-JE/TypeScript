{
    /*
    * Type Assertions ๐ฉ
    * */
    function jsStrFunc(): any {
        return 34;
    }
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong:any = 5;
    console.log((wrong as Array<number>).push(1)); // ๐ฑ

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2); // ๐ฑ, ! ๋ ๋ฌด์กฐ๊ฑด null์ ์๋์ผ๋ผ๊ณ  ์๋ฏธํ๋ ๊ฒ

    const button = document.querySelector('class');
    if(button) {
        button.nodeValue;
    }
}