import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendItem from '../FriendItem/FriendItem';

const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className={css.friendList}>
      {friends.default.map(friend => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.object,
};

export default FriendList;
