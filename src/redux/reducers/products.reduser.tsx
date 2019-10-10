import ProductsDefaultState from '../states/products.state';

const ProductReducer = (state = ProductsDefaultState, action: any) => {
    switch (action.type) {
      default: return { ...state };
    }
  };
  
  export default ProductReducer;