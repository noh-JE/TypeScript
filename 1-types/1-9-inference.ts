{
    /*
    * Type Inference
    * */
    let text = 'hello'; // text 선언과 동시에 string type으로 유추가 되버린 상황
    text = 1; // 그래서 string 타입이 아닌 타입들로 값을 재할당하면 error

    function print(message = '안녕') { // message: any 로 인식
        console.log(message);
    }
    print('hello');
    print(20);

    function add(x: number, y: number): number {
        return x + y;
    }
    const result = add(1, 2);
}