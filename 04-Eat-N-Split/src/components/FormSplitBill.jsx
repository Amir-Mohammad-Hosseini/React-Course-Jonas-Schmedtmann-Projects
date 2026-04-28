import { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend , onSplitBill }) => {
  const { name } = selectedFriend;
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUser] = useState(0);
  const [whoPays, setWhoPays] = useState("user");

  const paidByFriend =
    (bill && paidByUser) ? bill - paidByUser : "";

    const handleSubmit = (event) => {
      event.preventDefault()
      if(!bill  && !paidByUser)return
      
      onSplitBill(whoPays === "user" ? paidByFriend : -paidByUser)
    }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {name}</h2>

      <label>💰 Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(event) => setBill(+event.target.value)}
      />

      <label>🙍🏻 Your expense</label>
      <input
        type="number"
        value={paidByUser}
        onChange={(event) => setPaidByUser(+event.target.value > bill ? paidByUser : +event.target.value)}
      />

      <label>🧑🏼‍🤝‍👨🏻 {name}'s expense</label>
      <input type="number" value={paidByFriend} disabled />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoPays}
        onChange={(event) => setWhoPays(event.isDefaultPrevented.value)}
      >
        <option value="user">You</option>
        <option value="friend">{name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
