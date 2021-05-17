{
    // either: a or b
    interface Either<L, R> {
        left: () => L;
        right: () => R;
    }

    class SimpleEither<L, R> implements Either<L, R> {
        constructor(private leftValue: L, private rightValue: R) {};
        left(): L {
            return this.leftValue;
        }
        right(): R {
            return this.rightValue;
        }
    }

    const either: Either<number, number> = new SimpleEither(20, 50);
    either.left(); // 20
    either.right(); // 50

    const best = new SimpleEither({name: 'hihi', age: 20}, 'name');
}