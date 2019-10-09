import React from 'react';
import './Inputs.scss';

interface Props {
  type: string;
  name: string;
  placeholder: string;
  onChange(event: any): void;
}

const Inputs = (props: Props) => {
  return(
    <input type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange}/>
  )
}

export default Inputs