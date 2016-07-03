import React from 'react';
import SelectBusiness from '../containers/SelectBusiness.js';
import JoinBusiness from '../containers/JoinBusiness';
import CreateBusiness from '../containers/CreateBusiness';
import ChangeProfileName from '../containers/ProfileUsernameButton.js';
import ChangePassword from '../containers/ProfilePasswordButton.js';
import ChangeName from '../containers/ProfileNameButton.js';
import ChangeEmail from '../containers/ProfileEmailButton.js';
import bootstrap from '../assets/styles/bootstrap.css';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import inventory from '../assets/styles/InventoryPane.css';
import UpdateName from'../containers/UpdateNameForm';
import UpdateEmail from '../containers/UpdateEmailForm';
import UpdatePassword from '../containers/UpdatePasswordForm';
import UpdateUsername from '../containers/UpdateUsernameForm';
// import ProfileDetails from 'profileDetails.jsx';
// import ProfileDetails from '../components/ProfileDetails.jsx';


const Profile = ({ businesses, name, username, email, changeName, changeEmail, changeUsername, changePassword}) => (
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
        <div className={bootstrap.colmd3}>
          <div className={index.profilerow}>Name:{name}<br/></div>
          <div className={index.profilerow}>Username:{username}<br/></div>
          <div className={index.profilerow}>Email:{email}<br/></div>
          <div className={index.profilerow}>Password<br/></div>
        </div>
        <div className={bootstrap.colmd3}>
          <div className={index.profilebuttonrow}><ChangeName /></div>
          {changeName && <UpdateName/>}
          <div className={index.profilebuttonrow}><ChangeProfileName /></div>
          {changeUsername && <UpdateUsername/>}
          <div className={index.profilebuttonrow}><ChangeEmail /></div>
          {changeEmail && <UpdateEmail/>}
          <div className={index.profilebuttonrow}><ChangePassword /></div>
          {changePassword && <UpdatePassword/>}
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
