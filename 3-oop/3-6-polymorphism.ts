{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning the machine...🧼');
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up... 🔥');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots... ☕️`);
            return {
                shots,
                hasMilk: false,
            };
        }
        // 구현한 아이
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CoffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, readonly serialNumber: string) {
            super(beans);
        }
        private steamMilk():void {
            console.log('Steaming some milk...');
        }
        //overwriting
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            }
        }
    }

    class SweetCoffeeMaker extends CoffeLatteMachine {
        private addSugar():void {
            console.log('add sugar');
        }
       makeCoffee(shots: number): CoffeeCup {
           this.addSugar();
            return super.makeCoffee(shots);
       }
    }

    const machine = new CoffeeMachine(23);
    const latteMachine = new CoffeLatteMachine(23, 'ssss');
    const sweetMachine = new SweetCoffeeMaker(23, 'ddd');
    const coffee = latteMachine.makeCoffee(1);
    const coffee2 = sweetMachine.makeCoffee(1);
    console.log(latteMachine);
    console.log(coffee2);
}