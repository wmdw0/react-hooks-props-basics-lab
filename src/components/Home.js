import React from "react";

function Home(props) {
  console.log(props)
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.username} is a Web Developer from {props.city}
      </h1>
      
    </div>
  );
}

export default Home;

// {props.bio !="" && props.bio ? (
//     <p>
//     {props.bio}
//   </p>
//   ) : null }