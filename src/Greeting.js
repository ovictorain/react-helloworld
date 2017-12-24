import React from 'react';
import ReactDOM from 'react-dom';


function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  return(
    <div>
      {isLoggedIn ? (
        <UserGreeting />
      ) : (
        <GuestGreeting />
      )
      }
    </div>
  )
}

export default Greeting;
