import React, { Component } from 'react'

const ProductEditor = class extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { product, fields: {sku, price, quantity, name, categories, details}, handleSubmit, updateProduct, deleteProduct } = this.props;
    return (
      <div>
        <h1>{product.sku}</h1>
        <h1>{product.name}</h1>
        <form onSubmit={handleSubmit(updateProduct)}>
          <div>
            <label>sku <input type='text' {...sku}/></label>
          </div>
          <div>
            <label>price <input type='text' {...price}/></label>
          </div>
          <div>
            <label>quantity <input type='text' {...quantity}/></label>
          </div>
          <div>
            <label>name <input type='text' {...name}/></label>
          </div>
          <div>
            <label>categories <input type='text' {...categories}/></label>
          </div>
          <div>
            <label>details <input type='text' {...details}/></label>
          </div>
          <div className=''>
            <input type='submit' value='SAVE' />
          </div>
        </form>
        <div className=''>
          <button onClick={deleteProduct}>DELETE</button>
        </div>
      </div>
    );
  }
}

export default ProductEditor;
