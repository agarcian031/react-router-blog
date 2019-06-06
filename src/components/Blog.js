import React, { Component } from 'react'
import Post from "./Post";
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


  render() {
    return (
      <Segment raised padded color="blue">
      <Header as="h1" textAlign="center">Blog</Header>
      <Divider />
      { this.renderPosts() }
    </Segment>
    )
  }
}

export default Blog
