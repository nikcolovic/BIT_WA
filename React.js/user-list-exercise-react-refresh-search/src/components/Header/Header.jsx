import React from "react"

import "./Header.css"

const Header = ({isListView, onLayoutChange }) => {
    console.log('Header: ', isListView);
    return (
        <div className="header">
                <p>React Users</p>
                <button onClick={onLayoutChange}>{isListView ? 'Grid View' : 'List View'}</button>
                
        </div>
        
    )
}

export { Header };