import React from "react";
import { Header, Segment, Divider, Button, Icon } from "semantic-ui-react";
import PostForm from "./PostForm";

class Post extends React.Component {
  state = {
    editing: false, 
  }

  toggleEdit = () => {
    // will just take editing and give it the value of the opposite of what it currently is. 
    this.setState({ editing: !this.state.editing, })
  }

  render() {
    return (
      <Segment raised padded style={styles.segment}>
        {
          this.state.editing ? <PostForm {...this.props} edit={this.props.edit} toggleEdit={this.toggleEdit}/> :
          <div>
            <Header as="h3">{ this.props.title }</Header>
            <Divider/>
            <p>{ this.props.body }</p>
          </div>
        }
        <Button.Group>
          <Button icon color="blue" onClick={this.toggleEdit}>
            <Icon name="pencil"/>
          </Button>
          <Button icon color="red">
            <Icon name="trash"/>
          </Button>
        </Button.Group>
      </Segment>
    )
  }
}

const styles = {
  segment: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  }
}

export default Post;