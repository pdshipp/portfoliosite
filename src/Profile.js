import React, { Component } from "react";

class Profile extends Component {
  render() {
    //console.log(this.props);
    const { name, occupation } = this.props;
    return (
      <div className="profile">
        <div>Profile</div>
        <div>Name: {name}</div>
        <div>Occupation: {occupation}</div>
      </div>
    );
  }
}

export default Profile;
