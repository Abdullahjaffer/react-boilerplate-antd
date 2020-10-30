import React from "react";
import { connect } from "react-redux";
import { simpleAction } from "../Redux/Actions/simpleAction";
class Addpost extends React.Component {
  state = {};
  handleChange = (event) => {
    this.setState({ value: event.target.value });
    console.log(this.state);
  };
  handleAdd = () => {
    this.props.simpleAction(this.state.value);
  };
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAdd}>Post</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  simpleAction: (v) => dispatch(simpleAction(v)),
});

export default connect(null, mapDispatchToProps)(Addpost);
