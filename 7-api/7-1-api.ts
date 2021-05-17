Array;

type Student = {
    passed: boolean;
};
const students: Student[] = [{ passed: true }, { passed: true }, { passed: false } ];
const results = students.every(student => {
    return student.passed;
});
//console.log(results);

class Animal {};
class Cat extends Animal {
    isCat: boolean = true;
};
class Dog extends Animal {
    isDog: boolean = false;
};
const animal: Animal[] = [new Cat(), new Cat(), new Dog()];
function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isCat !== undefined;
}
console.log(animal.every<Cat>(isCat));