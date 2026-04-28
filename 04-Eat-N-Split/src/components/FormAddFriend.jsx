import { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ onAddFriend }) => {
  const [friendNameInput, setFriendNameInput] = useState("");
  const [friendImageInput, setFriendImageInput] = useState("");

  const handleSubmitAddNewFriend = (event) => {
    event.preventDefault();
    if (friendImageInput.trim().length && friendNameInput.trim().length) {
      onAddFriend({
        name: friendNameInput,
        image: friendImageInput,
        balance: 0,
      });
      setFriendNameInput("")
setFriendImageInput("")
    }
  };
  return (
    <form className="form-add-friend">
      <label htmlFor="friend-input">🧑🏼‍🤝‍👨🏻 Friend name</label>
      <input
        value={friendNameInput}
        onChange={(event) => setFriendNameInput(event.target.value)}
        type="text"
        id="friend-input"
      />

      <label htmlFor="image-input">🌇 Image URL</label>
      <input
        value={friendImageInput}
        onChange={(event) => setFriendImageInput(event.target.value)}
        type="text"
        id="image-input"
      />

      <Button onClick={handleSubmitAddNewFriend}>Add</Button>
    </form>
  );
};

export default FormAddFriend;
