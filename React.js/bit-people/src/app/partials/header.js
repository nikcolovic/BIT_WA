import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';


const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo center">{props.title}</Link>
                <div className = "row">
                <ul className="right hide-on-med-and-down">
                
                    <li><Link to='/About'>About</Link></li>
                    <li><a onClick={props.updateClick}><i className="material-icons">refresh</i></a></li>
                    <li><a onClick={props.handleClick}><i className="material-icons">{props.showList ? "view_list" : "view_module"}</i></a></li>
                </ul>
                </div>
            </div>
        </nav>
    )
};

Header.propTypes = {
    title: PropTypes.string.isRequired
  };

export default Header; 