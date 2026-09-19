import Button from "./Button";

export default function SplitBillForm() {
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
