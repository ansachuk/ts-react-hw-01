import { User } from "../../types/types";
import StatsBlock from "../StatsBlock/StatsBlock";

import css from "./Profile.module.scss";

type Props = { user: User };

export default function Profile({ user }: Props) {
	const { username, tag, location, avatar, stats } = user;

	return (
		<div className={css.profile}>
			<div className={css.description}>
				<img src={avatar} alt="User avatar" className={css.avatar} />
				<p className={css.name}>{username}</p>
				<p className={css.tag}>@{tag}</p>
				<p className={css.location}>{location}</p>
			</div>

			<ul className={css.stats}>
				{Object.keys(stats).map(key => (
					<StatsBlock key={key} statsLabel={key} quantity={stats[key as keyof typeof stats]} bordered={true} />
				))}
			</ul>
		</div>
	);
}
