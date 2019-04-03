import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Button (props) {
  return <button onClick={props.handleClick}>{props.label}</button>;
}

function Display (props) {
  return (
  <div>
    {props.children}
  </div>
  );
}



ReactDOM.render(
  <h1>Hello, Green Fox Academy!</h1>,
  document.getElementById('root'),
);
