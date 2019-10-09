import React from 'react';
import './Buttons.scss';

interface Props {
  text: string,
  className: string,
  onClick(): void;
}

const Buttons = (props: Props) => {
  return(
    <button className={props.className} onClick={props.onClick}>{props.text}</button>
  )
};

export default Buttons