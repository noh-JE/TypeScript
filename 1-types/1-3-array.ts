{
    // Array
    const fruits: string[] = ['🍏', '🍇'];
    const scores: Array<number> = [1, 2, 3];
    //변경 불가능. 읽을 수만 있음
    //function printArray2(fruits: readonly Array<string>) {} // 💩
    function printArray(fruits: readonly string[]) {}

    // Tuple - 배열. 서로 다른 타입을 함께 가질 수 있는 배열 💩
    // Tuple -> interface, type alias, class 로 대체해서 사용하는 게 좋음
    let student: [string, number];
    student = ['name', 123];
    student[0]; //name
    student[1]; //123
    const [name, age] = student;

    // Tuple example -> React useState
   // const [count, setCount] = useState(0);
}