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

function FriendsList(params) {
  return (
    <div className="sidebar">
      <ul>
        {initialFriends.map((friend) => (
          <FriendItem friend={friend}></FriendItem>
        ))}
      </ul>
    </div>
  );
}

function FriendItem({ friend }) {
  return (
    <li key={friend.id}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          {" "}
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {" "}
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>Select</Button>
    </li>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function AddFriendForm() {
  return (
    <form className="form-add-friend">
      <label htmlFor="name">Friend Name</label>
      <input type="text" name="name" id="name" />
      <label>Image URL</label>
      <input type="text" />
      <Button>Add Friend</Button>
    </form>
  );
}

function SplitBillForm() {
  return (
    <form className="form-split-bill">
      <h2>Split Bill With</h2>
      <label htmlFor="bill">Bill Value</label>
      <input type="text" name="bill" id="bill" />
      <label htmlFor="user-expense">Your expense</label>
      <input type="text" name="user-expense" id="user-expense" />
      <label htmlFor="friend-expense">X's expense</label>
      <input type="text" name="friend-expense" id="friend-expense" disabled />
      <label htmlFor="pay-bill">Who's paying the bill</label>
      <select name="pay-bill" id="pay-bill">
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
