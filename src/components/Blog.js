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

  // will return the current state of posts along with each post and their unique ids and information. 
  renderPosts = () => {
    return this.state.posts.map( post => <Post key={post.id} {...post} edit={this.editPost} />)
  };

  // will render a randomly generated id
  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  
  addPost = (postData) => {
    // this will take the postData object from the PostForm and will then pull out posts from the state array
    const { posts, } = this.state;
    // this will then assign a randomly generated id to the postData object and spread the rest of the params (title and body) of the filled in form data
    const post = { id: this.getId(), ...postData, };
    // this will reset the state of the posts object to include the new post, and spread the addition post information. 
    this.setState({ posts: [post, ...posts], });
  };

  editPost = (postData) => {
    const posts = this.state.posts.map( post => {
      if (post.id === postData.id) 
      return postData; 
      return post; 

    }); 
    this.setState({posts, }); 
  }


  render() {
    return (
      <Segment raised padded color="grey" inverted>
      <Header as="h1" textAlign="center">Blog</Header>
      <Divider />
      <PostForm add={this.addPost} />
      { this.renderPosts() }
    </Segment>
    )
  }
}

export default Blog
