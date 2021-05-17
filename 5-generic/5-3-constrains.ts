interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log('full time!!');
    }
    // class만이 가지고있는 함수
    workFullTime() {

    }
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log('part time!!');
    }
    workPartTime() {

    }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수 💩💩💩
// 타입을 광범위하게 만드는 것은 정말 안 좋은 습관
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
}

// 아무 타입이나 다 되는 건 아니고, 이 Employee를 구현한 확장한 아이만 가능
function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
}

const ne = new FullTimeEmployee();
const ba = new PartTimeEmployee();
ne.workFullTime();
ba.workPartTime();

// 세부 class의 정보를 잊어버림
const neAfterPay = pay(ne);
const baAfterPay = pay(ba);

/**************** constrains **************************/
const obj = {
    name: 'na',
    age: 20,
};

const obj2 = {
    animal: 'Dog',
}

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    // K extends keyof T : object 안에 있는 key 중에 하나여야한다. 즉, 오브젝트 안에 들어있는 키의 타입을 뜻함
    // T[K] : return되는 값은 오브젝트 T에 있는 그리고 키의 value가 리턴이 됨
    return obj[key];
}

console.log(getValue(obj, 'name'));
console.log(getValue(obj, 'age'));
console.log(getValue(obj2, 'animal'));