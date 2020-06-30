import React from 'react';
import Header from './Header';
import NotificationList from './NotificationList';
import Profile from './Profile';
import '../App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="box">
      <NotificationList />
      </div>
      
      <div className="box">
        <Profile />
      </div>
    </React.Fragment>
  );
}

export default App;



