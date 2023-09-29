import StatsBlock from "../StatsBlock/StatsBlock";

import { Data } from "../../types/types";

import getRandomHexColor from "../../utils/getRandomHexColor";
import css from "./Statistics.module.scss";

type Props = {
	stats: Data[];
	title: string;
};

const Statistics = ({ stats, title }: Props) => {
	return (
		<section className={css.statistics}>
			{title && <h2 className={css.title}>{title}</h2>}

			<ul className={css.statList}>
				{stats.map(item => (
					<StatsBlock key={item.id} statsLabel={item.label} quantity={item.percentage} bgColor={getRandomHexColor()}></StatsBlock>
				))}
			</ul>
		</section>
	);
};

export default Statistics;
