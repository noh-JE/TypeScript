// Mapped Type : 기존에 있는 타입들을 이용하면서 조금 다른 형태로 변환할 수 있는 것을 말함.

{
    type Video = {
        title: string;
        author: string;
    };
// [1, 2].map(item => item * item); // [1, 4]

    type Optional<T> = {
        [P in keyof T]?: T[P] // for...in : object에 있는 key들을 하나하나씩 도는 연산자
    };

    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P];
    }

    type VideoOptional = Optional<Video>;

    type Animal = {
        name: string;
        age: number;
    }

    const animal: Optional<Animal> = {
        name: 'dog'
    }

    const videoOp: VideoOptional = {
        title: 'a'
    };

    const videoaa: ReadOnly<Video> = {
        title: 'sss',
        author: 'me'
    }
//videoaa.title = 'aa'; // error


// type VideoOptional = {
//     title?: string;
//     author?: string;
//     description?: string;
// };
// type VideoReadOnly = {
//     readonly title: string;
//     readonly author: string;
// }
}

{
    type Video = {
        title: string;
        author: string;
    };

    type Nullable<T> = { [P in keyof T]: T[P] | null };
    const obj2: Nullable<Video> = {
        title: 'null',
        author: null
    }

    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    }

    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>;
    }
}

