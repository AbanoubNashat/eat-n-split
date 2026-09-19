import Button from "./Button";
import { useState } from "react";

export default function SplitBillForm({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split Bill With {selectedFriend.name}</h2>
      <label htmlFor="bill">Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        name="bill"
        id="bill"
      />
      <label htmlFor="user-expense">Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          Number(e.target.value) > bill
            ? paidByUser
            : setPaidByUser(Number(e.target.value))
        }
        name="user-expense"
        id="user-expense"
      />
      <label htmlFor="friend-expense">{selectedFriend.name}'s expense</label>
      <input
        type="text"
        value={bill - paidByUser}
        name="friend-expense"
        id="friend-expense"
        disabled
      />
      <label htmlFor="pay-bill">Who's paying the bill</label>
      <select
        name="pay-bill"
        id="pay-bill"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
