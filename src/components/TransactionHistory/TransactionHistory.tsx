import css from "./TransactionHistory.module.scss";

import TransactionItem from "../TransactionItem/TransactionItem";
import { Transaction } from "../../types/types";

type Props = { transactions: Transaction[] };

const TransactionHistory = ({ transactions }: Props) => (
	<table className={css.transactionHistory}>
		<thead>
			<tr>
				<th className={css.tHeaderLine}>Type</th>
				<th className={css.tHeaderLine}>Amount</th>
				<th className={css.tHeaderLine}>Currency</th>
			</tr>
		</thead>

		<tbody className={css.tBody}>
			{transactions.map(item => (
				<TransactionItem key={item.id} item={item} />
			))}
		</tbody>
	</table>
);

export default TransactionHistory;
