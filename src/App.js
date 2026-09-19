import FriendsList from "./components/FriendsList";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import SplitBillForm from "./components/SplitBillForm";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList></FriendsList>
        <AddFriendForm></AddFriendForm>
        <Button>Add Friend</Button>
      </div>
      <SplitBillForm></SplitBillForm>
    </div>
  );
}
