import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Max",
    image: "https://www.soorban.com/images/news/2024/04/1712415406_R6rW1.jpg",
    balance: -7,
  },
  {
    id: 933372,
    name: "David",
    image: "https://www.soorban.com/images/news/2024/04/1712415540_D6fP1.jpg",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://www.soorban.com/images/news/2024/04/1712415769_Q2bA6.jpg",
    balance: 0,
  },
];

const App = () => {
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [showFormAddFriend, setShowFormAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleAddNewFriend = (newFriendDatas) => {
    setFriendsList((prevFriends) => {
      return [...prevFriends, { id: friendsList.length, ...newFriendDatas }];
    });
    setShowFormAddFriend(false);
  };
  const handleShowFriendSplitBill = (friendDatas) => {
    setSelectedFriend((prevSelect) => {
      return prevSelect?.id === friendDatas.id ? null : friendDatas;
    });
  };

  const handleSplitBill = (value ) => {
    setFriendsList((prevFriends) => {
      const updatedFriends = [...prevFriends].map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      );
      return updatedFriends;
    });
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          onSelect={handleShowFriendSplitBill}
          friends={friendsList}
          selectedFriendId={selectedFriend?.id}
        />
        <Button
          onClick={() => setShowFormAddFriend((prevStatus) => !prevStatus)}
        >
          {showFormAddFriend ? "Close" : "Add friend"}
        </Button>
        {showFormAddFriend && (
          <FormAddFriend onAddFriend={handleAddNewFriend} />
        )}
      </div>
      {selectedFriend && (
        <FormSplitBill
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
};

export default App;
