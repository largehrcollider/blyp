import React, { Component } from 'react'
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const {fields: {sku, price, quantity, name, categories, details, productPicture}, handleSubmit, create} = this.props;
    return (
      <div className={index.createProduct}>
        <form  onSubmit={handleSubmit(create)}>
          <div className={index.createProduct}>
            <label className={index.createProductLabel}>sku <input type='text' {...sku}/></label>
          </div>
          <div className={index.createProduct}>
            <label className={index.createProductLabel}>price <input type='text' {...price}/></label>
          </div>
          <div className={index.createProduct}>
            <label className={index.createProductLabel}>quantity <input type='text' {...quantity}/></label>
          </div>
          <div className={index.createProduct}>
            <label className={index.createProductLabel}>name <input type='text' {...name}/></label>
          </div>
          <div className={index.createProduct}>
            <label className={index.createProductLabel}>categories <input type='text' {...categories}/></label>
          </div>
          <div className={index.createProduct}>
            <label className={index.createProductLabel}>details <input type='text' {...details}/></label>
          </div>
          <div className={index.createProduct}>
            <label className={index.createProductLabel}>File: <input type='file' {...productPicture} value={undefined}/></label>
          </div>
          <div className=''>
            <input className={index.save+" "+material.wavesEffect+" "+material.wavesLight} type='submit' value='SAVE' />
          </div>
        </form>
      </div>
    );
  }
}
