{
    const obj = {
        name: 'ellie',
    }
    obj.name; // ellie
    obj['name']; // ellie

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    };

    type Name = Animal['name']; // string
    const text: Name = 'hi';

    type Gender = Animal['gender']; // 'male' | 'female';

    type Keys = keyof Animal; // Animal의 모든 key값을 할당받음;
    const key: Keys = 'gender';

    type Person = {
        name: string;
        gender: Animal['gender'];
    }
    const person: Person = {
        name: 'string',
        gender: 'male',
    }
}