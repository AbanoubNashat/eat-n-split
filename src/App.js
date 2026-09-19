import { useState } from "react";
import FriendsList from "./components/FriendsList";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import SplitBillForm from "./components/SplitBillForm";

export default function App() {
  //----------------------------------------------
  // Where does the form show in our app ? in App Component then the state we need to make that form show and hide is in App Component not in the Form itself.
  const [showAddFriend, setShowAddFriend] = useState(false);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  //-----------------------------------------------
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList></FriendsList>
        {showAddFriend && <AddFriendForm></AddFriendForm>}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <SplitBillForm></SplitBillForm>
    </div>
  );
}
