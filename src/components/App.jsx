import React from "react";
import Login from './Login';

var isLoggedIn = false;


const CurrentTime = new Date(2022, 21, 6, 9).getHours();

function App() {
  return <div className="container">{
    //Ternary operator//
    // isLoggedIn ? <h1>Hello</h1>: <Login />
    // CurrentTime > 12 ? <h1>Resume work</h1> : <h2>You need to rest</h2>
    //&& operator
    CurrentTime > 12 && <h1>Resume work</h1>
  } </div>;
}

export default App;
