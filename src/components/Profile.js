import React from "react";
import ProfileTweet from "./ProfileTweet";
import ProfileName from './ProfileName.js';
import ProfilePhoto from './ProfilePhoto.js';
import ProfileNavBar from './ProfileNavBar.js';



function Profile(){
 return(
   <React.Fragment>   
     
      <div class="profile">
        <div class="profile-photo">
          <ProfilePhoto />
        </div>
        <div class="profile-name">
          <ProfileName />
        </div>
      </div>
      <div className="profile-nav">
        <ProfileNavBar />
      </div>
      <div class="profile-tweet">
      <ProfileTweet />
    </div>
   </React.Fragment>
 );
}


export default Profile;