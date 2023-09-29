import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
import TransactionItem from '../TransactionItem/TransactionItem';

const TransactionHistory = ({ transactions }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th className={css.tHeaderLine}>Type</th>
        <th className={css.tHeaderLine}>Amount</th>
        <th className={css.tHeaderLine}>Currency</th>
      </tr>
    </thead>

    <tbody className={css.tBody}>
      {transactions.default.map(item => (
        <TransactionItem key={item.id} item={item} />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.object,
};
export default TransactionHistory;
