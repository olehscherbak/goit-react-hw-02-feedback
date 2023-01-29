import PropTypes from 'prop-types';
import textColorChange from 'utils/textColorChange';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={css.statistics}>
      <p className={css.statistiscItem}>
        <span>Good: </span>
        <span>{good}</span>
      </p>
      <p className={css.statistiscItem}>
        <span>Neutral: </span>
        <span>{neutral}</span>
      </p>
      <p className={css.statistiscItem}>
        <span>Bad: </span>
        <span>{bad}</span>
      </p>
      <p className={css.statistiscItem}>
        <span>Total: </span>
        <span>{total}</span>
      </p>
      <p className={css.statistiscItem}>
        <span>Positive feedback: </span>
        <span
          style={{
            color: textColorChange(good, neutral, bad, total),
            fontWeight: 'bold',
          }}
        >
          {positivePercentage}
        </span>
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
