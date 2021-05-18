{
    class TimeoutError extends Error {}
    class OfflineError extends Error {}

    type NetworkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout';
    };
    type Success = {
        result: 'sucess';
    };
    type ReasultState = Success | NetworkErrorState;

    class NetworkClient {
        tryConnect() {}
    }

    class UserService {
        constructor(private client: NetworkClient) {}

        login() {

            // login..
            this.client.tryConnect();

        }
    }

    class App {
        constructor(private userService: UserService) {}
        run() {
            try {
                this.userService.login();
            } catch (error) {
                // show dialog to user
            } finally {

            }

        }
    }


    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();

}