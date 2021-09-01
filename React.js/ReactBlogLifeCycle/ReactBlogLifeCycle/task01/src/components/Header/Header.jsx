import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <h1 className="title">My React Blog</h1>
      </header>
    );
  }
}

export default Header;