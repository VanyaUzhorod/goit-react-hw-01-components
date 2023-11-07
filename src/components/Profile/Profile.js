export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div>
      <img src={avatar} alt={username} width="120" height="120" />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
