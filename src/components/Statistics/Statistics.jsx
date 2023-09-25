import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({
  bad,
  neutral,
  good,
  total,
  positivePercentage,
}) {
  const { statList, statListItem, label, value } = css;

  return (
    <ul className={statList}>
      <li className={statListItem}>
        <span className={label}>Bad:</span>
        <span className={value}>{bad}</span>
      </li>

      <li className={statListItem}>
        <span className={label}>Neutral:</span>
        <span className={value}>{neutral}</span>
      </li>

      <li className={statListItem}>
        <span className={label}>Good:</span>
        <span className={value}>{good}</span>
      </li>

      <li className={statListItem}>
        <span className={label}>Total:</span>
        <span className={value}>{total}</span>
      </li>

      <li className={statListItem}>
        <span className={label}>Positive feedback:</span>
        <span className={value}>{positivePercentage}%</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
