// 맵 타입과 컨디션 타입은 우리가 기존에 있는 타입을 보장하고 유지하고 재사용하면서
// 조금 다른 종류의 타입을 만들고 싶을 때 활용할 수 있다.

type Check<T> = T extends string? boolean : number;
type Type = Check<string>; // boolean

type TypeName<T> = T extends string
    ? 'string'
    : T extends number // 중첩된 ternary operator
        ? 'number'
        : T extends boolean
            ? 'boolean'
            : T extends undefined
                ? 'undefined'
                : T extends Function
                    ? 'function'
                    : 'object';

type T0 = TypeName<string>; //string
type T1 = TypeName<'a'>; //string
type T2 = TypeName<() => void>; //function