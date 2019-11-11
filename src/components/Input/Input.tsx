import React from 'react';

interface Props {
  name: string;
  type?: string;
  placeholder: string;
  textarea?: boolean;
  onChange(event: any): void
}

const Input: React.FC<Props> = (props) => {
  return (
    <div className="input-wrapper">
      {
        !props.textarea 
        ? <input className="input" name={props.name} type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
        : <textarea className="textarea" name={props.name} placeholder={props.placeholder} onChange={props.onChange}/>
      }
    </div>
  )
};

export default Input;