interface Stack {
    readonly size:number;
    push(value: string):void;
    pop(): string;
}

type StackNode = {
    // 불변성 유지
    readonly value: string;
    readonly next?: StackNode;
}

class StackImpl implements Stack {
    private _size: number = 0; // 내부에서만 사용
    private head?: StackNode;

    constructor(private capacity: number) {}

    get size() {
        return this._size;
    }
    push(value: string) {
        if(this.size === this.capacity) {
            throw new Error('Stack is full!');
        }
        const node: StackNode = { value, next: this.head };
        this.head = node;
        this._size++;
    }
    pop(): string {
        if(this.head == null) { // null == undefined, null !== undefined
            throw new Error('Stack is empty!');
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }
}

const stack = new StackImpl(10);
stack.push('ell, 2');
stack.push('ell3, 3');
stack.push('ell2, 1');

while(stack.size !== 0) {
    console.log(stack.pop());
}

stack.pop();