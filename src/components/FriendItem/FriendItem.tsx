import PropTypes from 'prop-types';
import css from './FriendItem.module.css';

const FriendItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.ofline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
export default FriendItem;
