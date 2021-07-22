import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";


// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App(user) {
  return (
    <div>
      <NavBar />
      <Home />
        {user.name} is a Web Developer from {user.city};
      <About />
    </div>
  );
}

export default App;
