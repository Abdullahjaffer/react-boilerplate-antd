import React from "react";
import logo from "../logo.svg";
import "./App.less";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from "../pages/home";
import User from "../pages/user";
import About from "../pages/about";
import Post from "../pages/posts";
import { connect } from "react-redux";
import Addpost from "../pages/addPost";
import { Button } from "antd";
class App extends React.Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/user">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/user/5">
              Users with id 5
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/post">
              Post({this.props.posts.length})
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/add-post">
              Add post
            </NavLink>
          </li>
        </ul>
        <Button>YOOO</Button>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/:id?" component={User} />
          <Route path="/about" component={About} />
          <Route path="/post" component={Post} />
          <Route path="/add-post" component={Addpost} />
          <Route component={() => <h1>Not found</h1>} />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.simpleReducer.post,
});

export default connect(mapStateToProps)(App);
