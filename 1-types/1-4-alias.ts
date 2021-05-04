{
    /* *
    * Type Aliases
    * */
    // 기본적인 타입 정의부터 시작해서 굉장히 복잡하고 다양한 타입들을 정의할 수 있음

    // 새로운 타입을 내가 정의함
    // Text 라는 새로운 타입은 문자열 이라고 정의내림
    type Text = string;
    const name: Text = 'ellie';
    const address: Text = 'korea';
    type Num = number;
    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: 'ellie',
        age: 20,
    };

    /* *
   * String Literal Types
   * */
    type Name = 'name';
    let ellieName: Name;
    ellieName = 'name';
    type JSON = 'json';
    const json: JSON = 'json';
    type Boal = true;
    const itCat:Boal = false;
}