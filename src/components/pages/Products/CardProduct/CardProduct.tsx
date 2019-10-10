import React from 'react';
import './CardProduct.scss';
import { Link } from 'react-router-dom';

interface Props {
  name: string;
  description: string;
  price: number;
  imgSrc: string;
}

const CardProduct = (props: Props) => {
  return (
    <Link to="/home" className="link-card-product">
      <div className="card-product-wrapper">
        <div className="img"><img src={props.imgSrc} alt={props.name} /></div>
        <div className="description-wrapper">
          <div className="name-price">
            <span>{props.name}</span>
            <span>{props.price}$</span>
          </div>
          <div className="description">{props.description.substring(0,60)}...</div>
        </div>
        <div className="hover-description">
          <span>{props.description.substring(0,300)} ...</span>
        </div>
      </div>
    </Link>
  )
}

export default CardProduct;