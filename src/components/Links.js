import React from "react";

function Links(props) {
  console.log(props)
  return (
    <div id="links">
        <h3>Links</h3>
        {/* {props.github !="" && props.github ? ( */}
            <div>
                {/* {props.github}
                {props.linkedin} */}
            <a href={props.github}>{props.github}</a> 
      
            <a href={props.linkedin}>{props.linkedin}</a>
            </div>
        {/* ) : null } */}
        {/* <a href={props.links.github}>{props.links.github}</a> 
      
        <a href={props.links.linkedin}>{props.links.linkedin}</a> */}
    </div>
  );
}

export default Links;

// {props.bio !="" && props.bio ? (
//     <p>
//     {props.bio}
//   </p>
//   ) : null }