import css from "./StatsBlock.module.scss";

type Props = {
	statsLabel: string;
	quantity: number;
	bordered?: boolean;
	bgColor?: string;
};

const StatsBlock = ({ statsLabel, quantity, bordered, bgColor }: Props) => {
	return (
		<li style={{ backgroundColor: bgColor }} className={`${css.statsItem} ${bordered && css.bordered}`}>
			<span className={css.label}>{statsLabel}</span>
			<span className={css.quantity}>{quantity}</span>
		</li>
	);
};

export default StatsBlock;
