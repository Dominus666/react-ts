import React from 'react';
import { connect } from 'react-redux';

interface Props {
  products: {
    name: string;
    description: string;
    price: number;
    imgSrc: string;
  }
};
interface State {};

class Products extends React.Component<Props, State> {

  render() {
    console.log(this.props)
    const productsInit = [
      {}
    ]
    return(
      <h1>Products</h1>
    )
  }
};

const mapStateToProps = (state: any) => ({
  products: state.ProductsReducer
})

export default connect(mapStateToProps)(Products);