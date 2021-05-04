{
    /*
    * Intersection Types: &
    * */
    type Student = {
        name: string;
        score: number;
    }
    type Worker = {
        employeeId: number;
        work: () => void;
    }

    function interWork(person: Student & Worker) {
        console.log(person.name, person.score, person.employeeId, person.work());
    }

    // 다양한 타입들을 하나로 묶어서 선언할 수가 있음
    interWork({
        name: 'ellie',
        score: 1,
        employeeId: 333,
        work: () => {},
    });
}