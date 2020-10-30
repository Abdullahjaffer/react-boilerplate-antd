import React from "react";
import { connect } from "react-redux";

class Post extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1>Post</h1>
        <ul>
          {this.props.posts.map((v) => (
            <li>{v}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.simpleReducer.post,
});

export default connect(mapStateToProps)(Post);
