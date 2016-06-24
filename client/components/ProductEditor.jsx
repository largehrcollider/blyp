import React, { Component } from 'react'

const ProductEditor = class extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { product, sku, fields: {sku, price, inventory, name, categories, details}, handleSubmit, fnToHandleSubmit } = this.props;
    return (
      <div>
        <h1>{product.sku}</h1>
        <h1>{product.name}</h1>
        <form onSubmit={handleSubmit(create)}>
          <div>
            <label>sku <input type='text' {...sku}/></label>
          </div>
          <div>
            <label>price <input type='text' {...price}/></label>
          </div>
          <div>
            <label>inventory <input type='text' {...inventory}/></label>
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
          <div className=''>
            <input type='submit' value='DELETE' />
          </div>
        </form>
      </div>
    );
  }
}

export default ProductEditor;
