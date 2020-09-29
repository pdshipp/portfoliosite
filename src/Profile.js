import React from "react";

const Friends = ({ friends, deleteFriend }) => {
  const friendList = friends.map((friend) => {
    return (
      <div className="friend" key={friend.id}>
        <div>Name: {friend.name}</div>
        <div>Age: {friend.age}</div>
        <div>Occupation: {friend.occupation}</div>
        <button
          onClick={() => {
            deleteFriend(friend.id);
          }}>
          Delete Friend
        </button>
      </div>
    );
  });
  return (
    <div className="friend-list">
      <div>Profile</div>
      <div>{friendList}</div>
    </div>
  );
};

export default Friends;
