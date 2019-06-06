import React, { Component } from 'react'
import {Form} from 'semantic-ui-react';

export class PostForm extends Component {
  state = {
    title: "", 
    body: "",
  }

  handleChange = (e) => {
    // allows react to use it as a key and then assign it a value
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    this.props.add(this.state); 
    this.setState({title: "", body: ""})
  }


  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            placeholder="title"
            label="Title:"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <Form.Input
            placeholder="body"
            label="Body:"
            name="body"
            onChange={this.handleChange}
            value={this.state.body}
          />
        </Form.Group>
        <Form.Button inverted color="green" fluid onClick={this.handleSubmit}>Submit</Form.Button>
      </Form>
    )
  }
}

export default PostForm;
