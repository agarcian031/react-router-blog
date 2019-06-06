import React from "react";
import { Header, Segment, Divider } from "semantic-ui-react";

class Post extends React.Component {
  render() {
    return (
      <Segment raised padded>
        <Header as="h3">{ this.props.title }</Header>
        <Divider/>
        <p>{ this.props.body }</p>
      </Segment>
    )
  }
}

export default Post;