import React from 'react';


const Display = (props) => {
  return (
    <div tabIndex="0" onKeyDown={props.onKeyDown}>
      <p>{props.value}</p>
    </div>
  );
}

export default Display