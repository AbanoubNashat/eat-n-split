import FriendItem from "./FriendItem";


export default function FriendsList({friends}) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <FriendItem friend={friend} key={friend.id}></FriendItem>
        ))}
      </ul>
    </div>
  );
}
