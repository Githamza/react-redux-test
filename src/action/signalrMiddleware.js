
import {
    JsonHubProtocol,
    HttpTransportType,
    HubConnectionBuilder,
    LogLevel
} from '@microsoft/signalr';
const onNotifReceived = res => {
    console.log('****** NOTIFICATION ******', res);
};

const startSignalRConnection = connection => connection.start()
    .then(() => console.info('SignalR Connected'))
    .catch(err => console.error('SignalR Connection Error: ', err));

const signalRMiddleware = ({ getState }) => next => async (action) => {
    // register signalR after the user logged in
    const urlRoot = 'https://signalr-negotiate.azurewebsites.net/api';
    // const connectionHub = `${urlRoot}`;

    // const protocol = new JsonHubProtocol();

    // let transport to fall back to to LongPolling if it needs to
    // const transport = HttpTransportType.WebSockets;

    // const options = {
    //     transport,
    //     logMessageContent: true,
    //     logger: LogLevel.Trace,
    //     accessTokenFactory: () => action.user.access_token
    // };

    // create the connection instance
    const connection = new HubConnectionBuilder()
        .withUrl(urlRoot,
        ).configureLogging(LogLevel.Information)

        .build();

    // event handlers, you can use these to dispatch actions to update your Redux store
    connection.on('updated', onNotifReceived);
    // re-establish the connection if connection dropped
    connection.onclose(() => setTimeout(startSignalRConnection(connection), 5000));

    startSignalRConnection(connection);


    return next(action);
};
export default signalRMiddleware