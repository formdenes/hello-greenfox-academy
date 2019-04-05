import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div>
      <NavLink to="/simple/states" >with states</NavLink> 
      <NavLink to="/simple/redux" >with Redux</NavLink> 
    </div>
  )
}

export default Navbar;  