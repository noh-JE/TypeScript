{
    // Array
    const fruits: string[] = ['π', 'π'];
    const scores: Array<number> = [1, 2, 3];
    //λ³κ²½ λΆκ°λ₯. μ½μ μλ§ μμ
    //function printArray2(fruits: readonly Array<string>) {} // π©
    function printArray(fruits: readonly string[]) {}

    // Tuple - λ°°μ΄. μλ‘ λ€λ₯Έ νμμ ν¨κ» κ°μ§ μ μλ λ°°μ΄ π©
    // Tuple -> interface, type alias, class λ‘ λμ²΄ν΄μ μ¬μ©νλ κ² μ’μ
    let student: [string, number];
    student = ['name', 123];
    student[0]; //name
    student[1]; //123
    const [name, age] = student;

    // Tuple example -> React useState
   // const [count, setCount] = useState(0);
}