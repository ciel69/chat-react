// @flow
import React from 'react';

import { branch, compose, setDisplayName } from 'recompose';

import EmptyMessage from 'components/EmptyMessage';

import type { IMessage } from 'reducers/chat';

import './style.css';

interface Props {
  message: IMessage[];
}

const enhance = compose(
  branch(props => props.message.length === 0, EmptyMessage),
  setDisplayName('ListMessage')
);

const ListMessage = (props: Props) => {
  return (
    <div className="list-message">
      {props.message.map((element, i) => {
        return (
          <div
            className={
              element.you ? 'list-message__you' : 'list-message__not-you'
            }
            key={i}
          >
            <div className="list-message__text">{element.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default enhance(ListMessage);
