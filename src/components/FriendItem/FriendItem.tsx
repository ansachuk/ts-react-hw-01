import { Friend } from "../../types/types";

import css from "./FriendItem.module.scss";

type Props = { friend: Friend };

const FriendItem = ({ friend }: Props) => {
	const { avatar, name, isOnline } = friend;
	return (
		<li className={css.item}>
			<span className={isOnline ? css.online : css.ofline}></span>
			<img className={css.avatar} src={avatar} alt="User avatar" width="48" />
			<p className={css.name}>{name}</p>
		</li>
	);
};

export default FriendItem;
