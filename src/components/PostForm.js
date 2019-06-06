import React, { Component } from 'react'
import {Form} from 'semantic-ui-react';

export class PostForm extends Component {
  state = {
    title: "", 
    body: "",
  }


  // will check to see if this.props.id exists and if it does then we will set state of the props title and body so that you can pass in the props into the form. 
  componentDidMount() {
    const {id, title, body} = this.props
    if (id)
      this.setState({ title, body });
      // OR
      // id && this.setState({title, body,}); 
  }

  // if an id exists we want to update a current post and not create a new post so it will pull the id and the current information. else, just call the post form as normal and add a new post. Then, reset the form to be an empty string after editing. 
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.edit({id: this.props.id, ...this.state});
      this.props.toggleEdit()
    } else {
      this.props.add(this.state);
    }
    this.setState({ title: "", body: "", });
  }

  

  handleChange = (e) => {
    // allows react to use it as a key and then assign it a value
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  // handleSubmit = (e) => {
  //   // will prevent the form from submitting when the page is rendered
  //   e.preventDefault(); 
  //   // this will add the current state of the form to the prop in the blog page and will be the data that is passed into the addPost function to add the new post information to state. 
  //   this.props.add(this.state); 
  //   // This will reset the title and body to their original state of being empty. 
  //   this.setState({title: "", body: ""})
  // }


  render() {
    // Want to call the handle submit on the entire form, not just an onclick on the button itself. 
    return (
      <Form onSubmit={this.handleSubmit}>
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
        <Form.Button inverted color="green" fluid>Submit</Form.Button>
      </Form>
    )
  }
}

export default PostForm;
