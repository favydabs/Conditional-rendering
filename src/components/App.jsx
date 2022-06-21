import React from "react";
import Login from './Login';

var isLoggedIn = false;


const CurrentTime = new Date().getHours;

function App() {
  return <div className="container">{
    //Ternary operator//
    // isLoggedIn ? <h1>Hello</h1>: <Login />
    CurrentTime > 17 ? <h1>You need to rest</h1> : <h2>Resume work</h2>
  } </div>;
}

export default App;
