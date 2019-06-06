import React, { Component } from 'react'
import Post from "./Post";
import PostForm from './PostForm'
import {Header, Segment, Divider} from 'semantic-ui-react';

export class Blog extends Component {
  state = {
    posts: [
      {
        id: 1, 
        title: "Cats", 
        body: "I love cats"
      },
      {
        id: 2, 
        title: "Utah", 
        body: "This is where I go to school."
      },
      {
        id: 3, 
        title: "React", 
        body: "React is so awesome!"
      }
    ]
  }

  renderPosts = () => {
    return this.state.posts.map( post => <Post key={post.id} {...post} />)
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  
  addPost = (postData) => {
    const { posts, } = this.state;
    const post = { id: this.getId(), ...postData, };
    this.setState({ posts: [post, ...posts], });
  };


  render() {
    return (
      <Segment raised padded color="blue">
      <Header as="h1" textAlign="center">Blog</Header>
      <Divider />
      <PostForm add={this.addPost} />
      { this.renderPosts() }
    </Segment>
    )
  }
}

export default Blog
