import React from 'react';


const Display = (props) => {
  return (
    <div tabIndex="0" onKeyDown={props.onKeyDown}>
      {props.children}
    </div>
  );
}

export default Display