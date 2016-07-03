import React from 'react';
import SelectBusiness from '../containers/SelectBusiness.js';
import JoinBusiness from '../containers/JoinBusiness';
import CreateBusiness from '../containers/CreateBusiness';
import ChangeProfileName from '../containers/ProfileNameButton.js';
import ChangePassword from '../containers/ProfilePasswordButton.js';
import ChangeName from '../containers/ProfileUsernameButton.js';
import ChangeEmail from '../containers/ProfileUsernameButton.js';
import bootstrap from '../assets/styles/bootstrap.css';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import inventory from '../assets/styles/InventoryPane.css';

let classes = ""


const Profile = ({ businesses }) => (
  <div>
    <div className={bootstrap.colmd6}>
      {businesses.map(b => (
        <SelectBusiness key={b} business={b} />
      ))}
        <JoinBusiness />
        <CreateBusiness />
    </div>
    {/*Profile info starts here */}
      <div className={index.profilebox}>
        <div className={index.profilepic}/>
        <div className={index.container}>
          <div className={bootstrap.colmd4}>
            <div className={index.profilerow}>User Name:<br/></div>
            <div className={index.profilerow}>User ProfileName:<br/></div>
            <div className={index.profilerow}>User Email:<br/></div>
            <div className={index.profilerow}>Password<br/></div>
          </div>
        <div className={bootstrap.colmd2}>
          <div className={index.profilebuttonrow}><ChangeName /></div>
          <div className={index.profilebuttonrow}><ChangeProfileName /></div>
          <div className={index.profilebuttonrow}><ChangeEmail /></div>
          <div className={index.profilebuttonrow}><ChangePassword /></div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
