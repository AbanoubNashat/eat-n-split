import { useState } from "react";
import FriendsList from "./components/FriendsList";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import SplitBillForm from "./components/SplitBillForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  //----------------------------------------------
  // Where does the form show in our app ? in App Component then the state we need to make that form show and hide is in App Component not in the Form itself.
  const [showAddFriend, setShowAddFriend] = useState(false);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  //-----------------------------------------------

  const [friends, setFriends] = useState(initialFriends);

  function handleOnAdd(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelectedFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleOnSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );
    setSelectedFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelected={handleSelectedFriend}
          selectedFriend={selectedFriend}
        ></FriendsList>
        {showAddFriend && (
          <AddFriendForm onAddFriend={handleOnAdd}></AddFriendForm>
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBillForm
          onSplitBill={handleOnSplitBill}
          selectedFriend={selectedFriend}
        ></SplitBillForm>
      )}
    </div>
  );
}
