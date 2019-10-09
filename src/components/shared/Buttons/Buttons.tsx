import React from 'react';
import './Buttons.scss';

interface Props {
  text: string,
  className: string
}

const Buttons = (props: Props) => {
  <button className={props.className}>{props.text}</button>
};

export default Buttons