// @flow
import io from 'socket.io-client';

import type { Dispatch } from 'redux';

import { GET_MESSAGE_SUCCESS, ON_MESSAGE } from 'constants/Messages';

export type IOnMessage = () => any;
export type IReceiveMessage = (string, boolean) => any;
export type ISubscribeMessage = boolean => any;
export type ISendMessage = string => any;

export type ChatActions = {
  onMessage: IOnMessage,
  receiveMessage: IReceiveMessage,
  subscribeMessage: ISubscribeMessage,
  sendMessage: ISendMessage,
};

const socket = io.connect(
  '',
  {
    reconnect: false,
  }
);

export const onMessage: IOnMessage = () => {
  return (dispatch: Dispatch) => {
    dispatch(subscribeMessage(true));
    return socket.on('message', function() {
      dispatch(receiveMessage(arguments[0], false));
    });
  };
};

const receiveMessage: IReceiveMessage = (text, you) => {
  return {
    type: GET_MESSAGE_SUCCESS,
    value: { text: text, you: you },
  };
};

const subscribeMessage: ISubscribeMessage = value => {
  return {
    type: ON_MESSAGE,
    value: value,
  };
};

export const sendMessage: ISendMessage = text => {
  return (dispatch: Dispatch) => {
    return socket.emit('message', text, function() {
      dispatch(receiveMessage(text, true));
    });
  };
};
