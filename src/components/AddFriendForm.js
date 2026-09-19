import Button from "./Button";

export default function AddFriendForm() {
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
