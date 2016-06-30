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
      <div>
        <form  onSubmit={handleSubmit(create)}>
          <div className={index.createProduct}>
            <label className={index.createProductLabel}>sku <input className={index.createProductInput}type='text' {...sku}/></label>
          </div>
          <div className={index.createProduct}>
            <label className={index.createProductLabel}>price <input className={index.createProductInput}type='text' {...price}/></label>
          </div>
          <div className={index.createProduct}>
            <label className={index.createProductLabel}>quantity <input className={index.createProductInput}type='text' {...quantity}/></label>
          </div>
          <div className={index.createProduct}>
            <label className={index.createProductLabel}>name <input className={index.createProductInput}type='text' {...name}/></label>
          </div>
          <div className={index.createProduct}>
            <label className={index.createProductLabel}>categories <input className={index.createProductInput}type='text' {...categories}/></label>
          </div>
          <div className={index.createProduct}>
            <label className={index.createProductLabel}>details <input className={index.createProductInput}type='text' {...details}/></label>
          </div>
          <div className={index.createProduct}>
            <label className={index.productPictureLabel}>File: <input className={index.productPicture}type='file' {...productPicture} value={undefined}/></label>
          </div>
          <div className=''>
            <input className={index.save+" "+material.wavesEffect+" "+material.wavesLight} type='submit' value='SAVE' />
          </div>
        </form>
      </div>
    );
  }
}
