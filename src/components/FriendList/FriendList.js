export const FriendListItem = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <span>{friend.isOnline}</span>
            <img
              src={friend.avatar}
              alt={friend.name}
              width="120"
              height="120"
            />
            <p>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
