{
    // 객체 지향적
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // class 생성 : 서로 관련 있는 데이터나 함수들을 한 곳에 묶어 놓는 기능
    class CoffeeMaker {
        // 멤버 변수
        static BEANS_GRAMM_PER_SHOT  = 7; // class level - 클래스 레벨에서 함께 고유될 수 있는거면 static 활용
        coffeeBeans: number = 0; // instance(object) level - object 마다 새로 만들어줘야되는 데이터가 있다면 멤버변수로 만들기

        // constructor : 이 클래스를 가지고 오프젝트
        // 인스턴스를 만들 때 항상 호출되는 함수
        constructor(beans: number) {
            this.coffeeBeans = beans;
        }

        static makerMachine(coffeeBeans: number): CoffeeMaker { // 어떠한 속성값도 필요하지 않을 때
            return new CoffeeMaker(coffeeBeans);
        }

        // 함수
        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!')
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            }
        }
    }
    const maker = new CoffeeMaker(32);
    const maker2 = new CoffeeMaker(13);
    console.log(maker);

    const newMaker = CoffeeMaker.makerMachine(3);
    console.log(newMaker);
}