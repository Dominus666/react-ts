import React from 'react';
import './Button.scss';

interface Props {
  text: string;
  file?: boolean;
  onClick?: (event: any) => any;
}

const Button: React.FC<Props> = (props) => {
  return (
    <div className="button-wrapper">
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  )
};

export default Button;