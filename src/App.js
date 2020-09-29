import React, { Component } from "react";
import Friend from "./Profile";
import AddFriend from "./AddFriend";

class App extends Component {
  state = {
    friends: [
      { name: "Mimi", age: 28, occupation: "Marketing", id: 1 },
      { name: "Jack", age: 28, occupation: "Geezer", id: 2 },
      { name: "Archie", age: 27, occupation: "Scientist", id: 3 },
    ],
  };
  addFriend = (friend) => {
    friend.id = Math.random();
    let friends = [...this.state.friends, friend];
    this.setState({
      friends: friends,
    });
  };
  deleteFriend = (id) => {
    let friends = this.state.friends.filter((friend) => {
      return friend.id !== id;
    });
    this.setState({ friends: friends });
  };
  componentDidMount() {
    console.log("Component Mounted");
  }
  render() {
    return (
      <div className="App">
        <h1>My Portfolio Site</h1>
        <p>Yooooo</p>
        <Friend deleteFriend={this.deleteFriend} friends={this.state.friends} />
        <AddFriend addFriend={this.addFriend} />
      </div>
    );
  }
}

export default App;
