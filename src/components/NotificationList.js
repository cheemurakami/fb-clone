import React from 'react';
import Notification from './Notification';

const masterNotificationList = [
  {
    name: "Nitun",
    content: "Hello!"
  },
  {
    name:"Chee",
    content : "How are you?"
  },
  {
    name: "Celeste",
    content: "Epicodus"
  }
];


function NotificationList(props) {
  return (
    <React.Fragment>
     <hr />
      {masterNotificationList.map((notification,index) =>
         <Notification name={notification.name}
                       content={notification.content}
                       key={index} />
      )}
    </React.Fragment>
  );
}


export default NotificationList;
