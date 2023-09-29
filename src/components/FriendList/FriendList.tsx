import { Friend } from "../../types/types";
import FriendItem from "../FriendItem/FriendItem";

import css from "./FriendList.module.scss";

type Props = { friends: Friend[] };

const FriendList = ({ friends }: Props) => {
	return (
		<ul className={css.friendList}>
			{friends.map(friend => (
				<FriendItem key={friend.id} friend={friend} />
			))}
		</ul>
	);
};

export default FriendList;
