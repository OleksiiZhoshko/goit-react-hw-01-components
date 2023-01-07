import PropTypes from 'prop-types';
import css from './statistics.module.css'


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Stats = ({ id, label, percentage }) => (
  <li key={id} className={css.item} style={{ backgroundColor: getRandomHexColor()}}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
  </li>
);

export const Statistics = ({ stats }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
    <ul className={css.statList}>
      {stats.map(stat => (
        <Stats key={stat.id} label={stat.label} percentage={stat.percentage} />
      ))}
    </ul>
  </section>
);

Stats.propTypes = {
  stat: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object.isRequired),
};