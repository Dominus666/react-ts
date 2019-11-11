import React from 'react';
import './Button.scss';

interface Props {
  text: string;
}

const Button: React.FC<Props> = (props) => {
  return (
    <div className="button-wrapper">
      <button>{props.text}</button>
    </div>
  )
};

export default Button;