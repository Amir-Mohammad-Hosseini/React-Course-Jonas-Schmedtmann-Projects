import Friend from "./Friend";



const FriendsList = ({friends , onSelect , selectedFriendId}) => {
  return (
    <ul>
      {
        friends.map((friend) => <Friend key={friend.id} friendDatas={friend} onSelectFriend={onSelect} isSelected={selectedFriendId === friend.id} />)
      }
    </ul>
  )
}

export default FriendsList
