import { useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';

const Navbar = () => {
    const [state, setState] = useState(false);

      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const list = () => (
        <div className="nav-list">
          <Link className="nav-link" to="/">Home</Link><br/>
          <Link className="nav-link" to="/gallery">Gallery</Link>
        </div>
      );


  return (
    <div className="nav">
              {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
          {/* <img className="logo" src={process.env.PUBLIC_URL+"/images/logo.png"} alt="logo"/> */}
          Menu
          </Button>
          <SwipeableDrawer
            anchor='left'
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  )
}

export default Navbar