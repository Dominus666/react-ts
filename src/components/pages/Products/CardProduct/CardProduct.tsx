import React from 'react';

interface Props {
  name: string;
  description: string;
  price: number;
  imgSrc: string;
}

const CardProduct = (props: Props) => {
  return (
    <div className="card-product-wrapper">
      <div className="img"><img src={props.imgSrc} alt={props.name}/></div>
      <div className="name">{props.name}</div>
      <div className="description">{props.description}</div>
      <div className="price">{props.price} $</div>
    </div>
  )
}