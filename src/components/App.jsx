import React from "react";

var isLoggedIn = true;
function renderConditionally() {
  if (isLoggedIn===true) {
      return  <h1>Hello</h1>

  } else {
    return(
      <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    );
  }

}
function App() {
    <div className="container" />
     {renderConditionally()}
}

export default App;
