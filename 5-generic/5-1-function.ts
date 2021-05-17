{
    // Item의 유효 유무를 확인하기 좋은 함수
    // 하지만 이 함수의 문제점은 숫자만 확인이 가능하다는 것
    // type별로 확인하려면 똑같은 것을 반복적으로 생성해야함
    function checkNotNullBad(arg: number | null): number {
        if(arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }
    // const result = checkNotNull(123);
    // console.log(result);
    // checkNotNull(null);

    /***********************************************************/

    // any로 대체할 경우, type 보장이 되지 않는다는 단점이 있음
    function checkNotNullAnyBad(arg: any | null): any {
        if(arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }
    // const result = checkNotNull(123);

    /***********************************************************/

    // GENERICS 사용 -> 어떤 타입이든 OK, 코딩 입력 후 타입이 결정되므로 타이 보장이 됨됨
   function checkNotNull<T>(arg: T | null): T {
        if(arg == null) {
            throw new Error('not valid number');
        }
        return arg;
    }
    const number = checkNotNull(123);
    const boal: boolean = checkNotNull(false);
}