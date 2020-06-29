import React from "react";
import PropTypes from "prop-types";

function Notification(props) {
  return (
  <React.Fragment>
    <h3>{props.name}</h3>
    <p>{props.content}</p>
  </React.Fragment>
  );
};

Notification.propTypes = {
  name: PropTypes.string,
  content: PropTypes.string
};

export default Notification;