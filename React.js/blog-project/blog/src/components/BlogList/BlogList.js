import React from 'react';

import { blogPosts } from '../../data/blog-posts.js';

import { Blog } from '../Blog/Blog'

import './BlogList.css';

export const BlogList = () => (
    <div className = 'blogList'>
    {blogPosts.map((item, index) => (
        <Blog title = {item.title} body = {item.body} key = {index}/>
    ))}    
    </div>
);