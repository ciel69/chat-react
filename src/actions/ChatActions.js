import io from 'socket.io-client';
import {
    GET_MESSAGE_SUCCESS,
    ON_MESSAGE
} from '../constants/Messages';


const socket = io.connect('', {
    reconnect: false
});


export function onMessage() {
    return dispatch => {
        dispatch(subscribeMessage(true));
        return socket.on('message', function () {
            dispatch(receiveMessage(arguments[0], false));
        });
    }
}

function receiveMessage(text, you) {
    return {
        type: GET_MESSAGE_SUCCESS,
        value: {text:text, you:you}
    }
}

function subscribeMessage(value) {
    return {
        type: ON_MESSAGE,
        value: value
    }
}

export function sendMessage(text) {
    return dispatch => {
        return socket.emit('message', text, function () {
            dispatch(receiveMessage(text, true));
        });
    }
}