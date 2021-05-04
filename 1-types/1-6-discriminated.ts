{
    // function: login -> success, fail
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        }
    }
    type FailState = {
        result: 'fail';
        reason: string;
    }
    type LoginState = SuccessState | FailState;
    function login(): LoginState  {
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            }
        }
    }

    /*
    * Discriminated Union
    * union type 에서 어떤 케이스든 공통적인 프로퍼티를 가지고있으면
    * 조금 더 구분하기 쉽게 만들 수 있다.
    * ex) results
    * */

    // printLoginState(state: LoginState)
    // success -> body 💙
    // fail -> reason 😓
    function printLoginState(state: LoginState) {
        if(state.result === 'success') {
            console.log(`💙${state.response.body}`);
        } else {
            console.log(`😓${state.reason}`);
        }
    }
}