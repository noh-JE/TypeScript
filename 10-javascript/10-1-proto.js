// Prototype
// 자바스크립트 객체지향 프로그래밍 상속을 하기 위해 쓰이는 아이
// 그리고 코드를 재사용하기 위해서 만들어진 아이

const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__); // true -> 왜? 동일한 오브젝트의 프로토를 상속하고 있기 때문이다.

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
    this.beans = beans;
    // Instance member level
    // this.makeCoffee = (shots) => {
    //
    // };
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log('making... coffee');
}
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
    this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();