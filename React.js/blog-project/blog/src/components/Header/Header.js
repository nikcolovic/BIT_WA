import React from 'react';

import './Header.css';

const Header = () => (
    <nav className = 'navbar header'>
        <div className = 'container-fluid'>
            <span className = 'navbar-brand mb-0 h1 text-center'>My React Blog</span>
        </div>
    </nav>
);

export { Header };