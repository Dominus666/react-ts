import React from 'react';
import './Products.scss';
import { connect } from 'react-redux';
import CardProduct from './CardProduct/CardProduct';

interface Props {
  products: {
    products: [
      {
        name: string;
        description: string;
        price: number;
        imgSrc: string
      }
    ]
  }
};
interface State { };

class Products extends React.Component<Props, State> {


  render() {
    console.log(this.props)
    const products = this.props.products.products.map((product, index) => {
      return <CardProduct name={product.name} description={product.description} price={product.price} imgSrc={product.imgSrc} key={index}/>
    })
    return (
      <div className="products-wrapper">
        {products}
      </div>
    )
  }
};

const mapStateToProps = (state: any) => ({
  products: state.ProductsReducer
})

export default connect(mapStateToProps)(Products);