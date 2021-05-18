{
    type ToDo = {
        title: string;
        description: string;
    };

    function display(todo: Readonly<ToDo>) {
        // todo.title = 'java'; //error
    }
}

/**
 * Make all properties in T readonly
 */
// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// };
