import React from "react";

import './Blog.css'

const Blog = (props) => {
  return (    
    <div className="blogItem">
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
    </div>    
  )
};

export default Blog