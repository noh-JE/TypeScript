console.log(this);

function simpleFunc() {
    console.log(this);
};

// 기본적으로 정의된 함수는 글로벌 객체에서 이용, 접근 가능
// 바로 윈도우에서 접근 가능
window.simpleFunc();

console.clear();

class Counter {
    count = 0;
    increase = () => { // 선언된 당시에 this context를 유지
        console.log(this);
    };
}

const counter = new Counter();
counter.increase();
// 변수는 글로벌 객체 안에 등록이 되지않음
const caller = counter.increase; // undefined
const caller = counter.increase.bind(counter);
caller();

class Bod {};
const box = new Bod();
box.run = counter.increase;
box.run();