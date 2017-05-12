import React, {PropTypes} from 'react';
import ListMessage from '../ListMessage';
import {sendMessage, onMessage} from '../../actions/ChatActions';
import {connect} from 'react-redux';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import './style.css'


const propTypes = {
    dispatch: PropTypes.func,
    chat: PropTypes.object.isRequired,
};


class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputMessage: ''
        };

        this._sendMessage = this._sendMessage.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        const {dispatch, chat} = this.props;
        if (!chat.onMessage) {
            dispatch(onMessage());
        }
    }

    _sendMessage(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        if (this.state.inputMessage.trim().length > 0) {
            dispatch(sendMessage(this.state.inputMessage));
        }
        this.setState({inputMessage: ""});
    }

    handleInput(e) {
        this.setState({inputMessage: e.target.value});
    }

    render() {
        const {chat} = this.props;
        return (
            <div>
                <h1>Chat</h1>
                <ListMessage message={chat.messages}/>
                <form onSubmit={(event) => this._sendMessage(event)} className="chat-form">
                    <FormControl
                        className="chat-form__input"
                        onChange={(event) => this.handleInput(event)}
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

Chat.propTypes = propTypes;

function mapStateToProps(state) {
    return {
        chat: state.chat
    };
}


export default connect(mapStateToProps)(Chat);