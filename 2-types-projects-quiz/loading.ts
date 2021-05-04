{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(loadState: ResourceLoadState) {
    switch(loadState.state) {
      case 'loading':
        return console.log('👀 loading...');
        break;
      case 'success':
        return console.log(`😃 ${loadState.response.body}`);
        break;
      case 'fail':
        return console.log(`😱 ${loadState.reason}`);
        break;
      default:
        throw new Error(`unknown state: ${loadState}`);
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
