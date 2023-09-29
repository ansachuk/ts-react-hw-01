import PropTypes from 'prop-types';
import css from './StatsBlock.module.css';

const StatsBlock = ({ statsLabel, quantity, bordered, bgColor }) => {
  return (
    <li
      style={{ backgroundColor: bgColor }}
      className={`${css.statsItem} ${bordered && css.bordered}`}
    >
      <span className={css.label}>{statsLabel}</span>
      <span className={css.quantity}>{quantity}</span>
    </li>
  );
};

StatsBlock.propTypes = {
  statsLabel: PropTypes.string,
  quantity: PropTypes.number,
  bordered: PropTypes.bool,
  bgColor: PropTypes.string,
};

export default StatsBlock;
