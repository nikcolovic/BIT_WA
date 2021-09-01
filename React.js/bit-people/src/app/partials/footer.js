import React from 'react';

const Footer = (props) => {
    return (
        <footer className="page-footer">
        <div className = "footer-copyright">
            <div className = "container">
            <p>© 2021 Copyright BIT</p>
            <span>{props.timeVisit}</span>
            </div>
            </div>
            </footer>
    )

}

export default Footer; 