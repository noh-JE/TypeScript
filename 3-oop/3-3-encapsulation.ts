{
    // 캡슐화
    /*
    * 인캡슐레이션 캡슐화는 클래스 만들 때
    * 외부에서 보일 수 있는, 외부에서 접근할 수 있는 것은 무엇인지
    * 그리고 내부적으로만 가지고 있어야되는 데이터는 무엇인지
    * 이런 것들을 결정할 수 있다.
    * 그래서 외부에 노출해도 되는 것은 무엇인지 이런 것들을 잘 생각해서
    * 클래스를 디자인하는 것이 중요!
    * public - 공개, default
    * private - 외부 접근x
    * protected - 상속 할 때, 상속한 자식 클래스에서만 접근이 가능
    * */

    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // class 생성 : 서로 관련 있는 데이터나 함수들을 한 곳에 묶어 놓는 기능
    class CoffeeMaker {
        // 멤버 변수
        private static BEANS_GRAMM_PER_SHOT  = 7; // class level - 클래스 레벨에서 함께 고유될 수 있는거면 static 활용
        private coffeeBeans: number = 0; // instance(object) level - object 마다 새로 만들어줘야되는 데이터가 있다면 멤버변수로 만들기

        // constructor : 이 클래스를 가지고 오프젝트
        // 인스턴스를 만들 때 항상 호출되는 함수
        private constructor(beans: number) {
            this.coffeeBeans = beans;
        }

        static makerMachine(coffeeBeans: number): CoffeeMaker { // 어떠한 속성값도 필요하지 않을 때
            return new CoffeeMaker(coffeeBeans);
        }

        // 외부에서 내부의 상태를 변경할 수 있도록 추가
        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans be greater than 0');
            }
            this.coffeeBeans += beans;
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

    const maker = CoffeeMaker.makerMachine(32);
    maker.fillCoffeeBeans(20);

    class User {
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }

        private internalAge = 4;

        get age(): number {
            return this.internalAge;
        }

        set age(num: number) {
            this.internalAge = num;
        }

        constructor(private firstName: string, public lastName: string) {
        }
    }
    const user = new User('steve', 'jobs');
    console.log(user.fullName);
}