import Button from "./Button";

const Friend = ({ onSelectFriend, friendDatas , isSelected }) => {
  const { name, image, balance } = friendDatas;
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red">
          You owe {name} {Math.abs(balance)}€
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}
      {balance > 0 && (
        <p className="green">
          {name} owes you {Math.abs(balance)}€
        </p>
      )}
      <Button onClick={() => onSelectFriend(friendDatas)}>{isSelected ? "Close" : "Select"}</Button>
    </li>
  );
};

export default Friend;
