/*
* 많이 사용되는 아이 중 하나
* Union Types: OR
* */
{
    // 모든 가능한 케이스 중에
    // 발생할 수 있는 케이스를 선정해 그 중에 하나를 담을 수 있는 타입을 만들고 싶을 때
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('left');

    type TilSize = 8 | 16 | 32;
    const tile: TilSize = 16;

    // function: login -> success, fail
    type SuccessState = {
        response: {
            body: string;
        }
    }
    type FailState = {
        reason: string;
    }
    type LoginState = SuccessState | FailState;
    function login(): LoginState  {
        return {
            response: {
                body: 'logged in!',
            }
        }
    }

    /*
    * Discriminated Union
    * union type 의 차별화되는 이름이 동일한 타입을 둠으로서 간편하게 구분할 수 있는 것
    * */

    // printLoginState(state: LoginState)
    // success -> body 💙
    // fail -> reason 😓
    function printLoginState(state: LoginState) {
        if('response' in state) {
            console.log(`💙${state.response.body}`);
        } else {
            console.log(`😓${state.reason}`);
        }
    }
}

