import FriendItem from "./FriendItem";

export default function FriendsList({ friends, onSelected ,selectedFriend }) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <FriendItem
            friend={friend}
            key={friend.id}
            onSelected={onSelected}
            selectedFriend={selectedFriend}
          ></FriendItem>
        ))}
      </ul>
    </div>
  );
}
