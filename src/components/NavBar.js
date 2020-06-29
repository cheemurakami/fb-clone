import React from 'react'
import SearchBar from './SearchBar';
import MessagesButton from './MessagesButton';
import NotificationButton from './NotificationButton';
import HomeButton from './HomeButton';

function NavBar() {
  return (
    <React.Fragment>
    <div class= "nav-bar">
      <div className="nav-buttons">
        <MessagesButton />
        <NotificationButton />
        <HomeButton />
        </div>
        <div className ="search-bar">
          <SearchBar/>
        </div>
        </div>
      </React.Fragment>
  );
}
export default NavBar;