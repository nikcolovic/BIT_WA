import React from "react";
import { getBlogs } from "../../services/blogService";
//import { blogs } from "../../data/blog-posts.js";
import Blog from "../Blog/Blog";

import "./BlogList.css";

export class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogList: [],
    };
  }

  componentDidMount() {
    getBlogs()
    .then((data) => {
      this.setState({ blogList: data });
    });
  }

  render() {
    if (this.state.blogList.length === 0) return <div>Loading</div>;

    return (
      <div className="blogList">
        {this.state.blogList.map((post, index) => (
          <Blog post={post} key={index} />
        ))}
      </div>
    );
  }
}