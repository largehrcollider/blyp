import React, { Component } from 'react';
import { Link } from 'react-router';
import userPNG from '../assets/images/user.png'
import lockPNG from '../assets/images/lock.png'
import index from '../assets/styles/index.css';

export default class Signup extends Component {
  constructor(props) {
    super(props);
  }

render() {
    const { fields: { name, username, email, password, profilePicture }, handleSubmit, signup } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(signup)}>
          <div className={index.login+" "+index.signupHeight}>
            <div className={index.login_title}>
            </div>
            <div className={index.login_fields}>
              <div className={index.login_fields__user}>

                <div className={index.icon}>
                  <img src={userPNG} />
                </div>
                <input placeholder='Name' type='text' {...name} />
                <input placeholder='Username' type='text' {...username} />
                <input placeholder='Email' type='text' {...email} />
                <div className={index.login_fields__password}>
                  <div className={index.icon}>
                    <img src={lockPNG} />
                  </div>
                  <input placeholder='Password' type='password' {...password} />
                </div>
                <input className='' type='file' {...profilePicture} value={undefined}/>
                <div className={index.login_fields__submit}>
                  <input type='submit' value='Sign Up' />
                </div>
              </div>
              <div className={index.disclaimer}>
                <p>BLYP 2016 ALL RIGHTS RESERVED</p>
              </div>
            </div>
          </div>
        </form>
      <div>
        <div className={index.signupcontainer}>
          <span><p>Already have an account? </p></span><span className={index.plink}><Link to='/'>Log in</Link></span>
        </div>
      </div>
    </div>
    );
  }
}
