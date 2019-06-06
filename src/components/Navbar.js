import React from "react";
import { Menu, Icon } from "semantic-ui-react"
import { Link } from "react-router-dom"; 

const Navbar = () => (
  <Menu inverted>
    <Menu.Menu position="left">
      <Icon name="blogger" size="big" color="teal" bordered/>
    </Menu.Menu>
    <Menu.Menu position="right">
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/about">
      <Menu.Item>
        About
      </Menu.Item>
    </Link>
    <Link to="/blog">
      <Menu.Item>
        Blog
      </Menu.Item>
    </Link>
    </Menu.Menu>
  </Menu>
);

export default Navbar;