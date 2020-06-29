import React from 'react'
import SearchBar from './SearchBar';
import MessagesButton from './MessagesButton';
import NotificationButton from './NotificationButton';
import HomeButton from './HomeButton';

function NavBar() {
  return (
    <div class= "nav-bar">
      <div className="nav-buttons">
    <React.Fragment>
      <MeasagesButton />
      <NotificationButton />
      <HomeButton />
      <div className ="search-bar">
      <SearchBar/>
      </div>
      </div>
      <hr/>
      </React.Fragment>
  );
}