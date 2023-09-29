import StatsBlock from 'components/StatsBlock/StatsBlock';
import css from './Statistics.module.css';
import getRandomHexColor from 'utils/getRandomHexColor';

const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.default.map(item => (
          <StatsBlock
            key={item.id}
            statsLabel={item.label}
            quantity={item.percentage}
            bgColor={getRandomHexColor()}
          ></StatsBlock>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
