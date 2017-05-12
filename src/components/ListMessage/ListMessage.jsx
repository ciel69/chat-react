import React from 'react';
import './style.css';

class ListMessage extends React.Component {
    listRender(elementMessage){
        return elementMessage.map((element, i) => {
            console.log(element);
            return (
                <div className={!!element.you ? 'list-message__you' : 'list-message__not-you'} key={i}>
                    <div className="list-message__text">{element.text}</div>
                </div>
            );
        })

    }

    render() {
        const {message} = this.props;
        if (message.length > 0) {
            return(
                <div className="list-message">
                   {this.listRender(message)}
                </div>
            );
        } else {
            return(
                <div className="list-message">
                    <div className="list-message__empty">empty</div>
                </div>
            );
        }
    }

}

export default ListMessage;