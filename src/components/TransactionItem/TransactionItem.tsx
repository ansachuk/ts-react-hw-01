import { Transaction } from "../../types/types";
import css from "./TransactionItem.module.scss";

type Props = { item: Transaction };

const TransactionItem = ({ item }: Props) => {
	const { type, amount, currency } = item;
	return (
		<tr className={css.transItemRow}>
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</tr>
	);
};

export default TransactionItem;
