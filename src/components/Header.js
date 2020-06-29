import React from 'react'
//import "bootstrap/dist/css/bootstrap.min.css";
// import { Nav, Navbar} from 'react-bootstrap';

function Header () {
  return (
    <React.Fragment>
      <span> Home </span>
      <span> Notification </span>
      <span> Messages </span>
       
      <label>Search</label>
      <input type='text' />
      <button>Tweet</button>
    </React.Fragment>
    );
  }

export default Header;