import React from "react";
class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>Blah blah</p>
        <button onClick={() => this.props.history.push("/")}>
          Take me home
        </button>
      </div>
    );
  }
}
export default About;
