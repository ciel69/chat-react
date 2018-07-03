// @flow
import React from 'react';

import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as chatActions from 'actions/chatActions';

import type { Dispatch } from 'redux';
import type { ChatActions } from 'actions/chatActions';
import type { TypeChat } from 'reducers/chat';

import ListMessage from 'components/ListMessage';

import './style.css';

interface Props {
  chatActions: ChatActions;
  chat: TypeChat;
}
interface State {
  inputMessage: string;
}

class Chat extends React.Component<Props, State> {
  state: State = {
    inputMessage: '',
  };

  componentDidMount() {
    const { chat, chatActions } = this.props;

    if (!chat.onMessage) {
      chatActions.onMessage();
    }
  }

  handleSendMessage = (e: Object) => {
    e.preventDefault();
    const chatActions: ChatActions = this.props.chatActions;
    chatActions.sendMessage();
    if (this.state.inputMessage.trim().length > 0) {
      chatActions.sendMessage(this.state.inputMessage);
    }
    this.setState({ inputMessage: '' });
  };

  handleInput = (e: Object) => {
    this.setState({ inputMessage: e.target.value });
  };

  render() {
    const chat: TypeChat = this.props.chat;

    return (
      <div>
        <h1>Chat</h1>
        <ListMessage message={chat.messages} />
        <form onSubmit={this.handleSendMessage} className="chat-form">
          <FormControl
            className="chat-form__input"
            onChange={this.handleInput}
            type="text"
            placeholder="Enter message"
            required="required"
            value={this.state.inputMessage}
          />
          <Button type="submit" bsClass="chat-form__submit btn">
            Send
          </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    chat: state.chat,
  };
}
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    chatActions: bindActionCreators(chatActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
