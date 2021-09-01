
import React from 'react';

const SearchBar = (props) => {
    return (
        <div className="container">
        <form className="col m12">
        <div className="row">
            <div className="input-field col s12">
            <i className="material-icons prefix">search</i>
            <input id="icon_prefix" type="text" className="validate" placeholder="Search users"
            value={props.inputValue} onChange={props.handleChange} />
            </div>
        </div>
        </form>
    </div>
  )
}

export default SearchBar;