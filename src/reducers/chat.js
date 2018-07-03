import { GET_MESSAGE_SUCCESS, ON_MESSAGE } from '../constants/Messages';

export interface IMessage {
  you: boolean;
  text: string;
}

export type TypeChat = {
  messages: IMessage[],
  onMessage: boolean,
};

const initialState: TypeChat = {
  messages: [],
  onMessage: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGE_SUCCESS:
      return { ...state, messages: [...state.messages, action.value] };

    case ON_MESSAGE:
      return { ...state, onMessage: action.value };

    default:
      return state;
  }
}
