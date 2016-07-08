import React, { Component } from 'react'
import index from '../assets/styles/index.css';
import c from 'classnames';
import m from '../assets/materialize/css/materialize.css';

export default class CreateProduct extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { fields: { sku, price, quantity, name, categories, details, productPicture }, handleSubmit, create } = this.props;
    return (
      <div>
        <div className={index.createProductHeader}><h1>New Product</h1></div>
        <div className={m.row}>
          <div className={c(m.col, m.s12, m.m8, m.pushM2, m.l6, m.pushL3)}>
            <form
              onSubmit={handleSubmit(create)}
              className=''
            >
              <div className={m.row}>
                <div className={c(m.col, m.s3)}>
                  <div className={c(m.valignWrapper)}>
                    <h5 className={c(m.valign)}>SKU</h5>
                  </div>
                </div>
                <div className={c(m.col, m.s9)}>
                  <div className={m.inputField}>
                    <input className={m.validate} type='text' {...sku}/>
                  </div>
                </div>
              </div>
              <div className={m.row}>
                <div className={c(m.col, m.s3)}>
                  <div className={c(m.valignWrapper)}>
                    <h5 className={c(m.valign)}>Price</h5>
                  </div>
                </div>
                <div className={c(m.col, m.s9)}>
                  <div className={m.inputField}>
                    <input className={m.validate} type='text' {...price}/>
                  </div>
                </div>
              </div>
              <div className={m.row}>
                <div className={c(m.col, m.s3)}>
                  <div className={c(m.valignWrapper)}>
                    <h5 className={c(m.valign)}>Quantity</h5>
                  </div>
                </div>
                <div className={c(m.col, m.s9)}>
                  <div className={m.inputField}>
                    <input className={m.validate} type='text' {...quantity}/>
                  </div>
                </div>
              </div>
              <div className={m.row}>
                <div className={c(m.col, m.s3)}>
                  <div className={c(m.valignWrapper)}>
                    <h5 className={c(m.valign)}>Name</h5>
                  </div>
                </div>
                <div className={c(m.col, m.s9)}>
                  <div className={m.inputField}>
                    <input className={m.validate} type='text' {...name}/>
                  </div>
                </div>
              </div>
              <div className={m.row}>
                <div className={c(m.col, m.s3)}>
                  <div className={c(m.valignWrapper)}>
                    <h5 className={c(m.valign)}>Categories</h5>
                  </div>
                </div>
                <div className={c(m.col, m.s9)}>
                  <div className={m.inputField}>
                    <input className={m.validate} type='text' {...categories}/>
                  </div>
                </div>
              </div>
              <div className={m.row}>
                <div className={c(m.col, m.s3)}>
                  <div className={c(m.valignWrapper)}>
                    <h5 className={c(m.valign)}>Details</h5>
                  </div>
                </div>
                <div className={c(m.col, m.s9)}>
                  <div className={m.inputField}>
                    <input className={m.validate} type='text' {...details}/>
                  </div>
                </div>
              </div>
              <div className={m.row}>
                <div className={c(m.col, m.s3)}>
                  <div className={c(m.valignWrapper)}>
                    <h5 className={c(m.valign)}>Picture</h5>
                  </div>
                </div>
                <div className={c(m.col, m.s9)}>
                  <div className={m.inputField}>
                    <input className={m.validate} type='file' {...productPicture} value={undefined}/>
                  </div>
                </div>
              </div>
              <div className={m.row}>
                <button className={c(m.btn, m.wavesEffect, m.wavesLight)} type='submit'>Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
