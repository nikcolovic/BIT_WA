import React from 'react';

import './Blog.css'

import PropTypes from 'prop-types'

export const Blog = (props) => {
    return (
        <div className = 'blogItem'>
            <h4>{props.title}</h4>
            <p>{props.body}</p>
        </div>
    )
 }

 Blog.propTypes = {
     title: PropTypes.string.isRequired,
     body: PropTypes.string.isRequired
 }

 