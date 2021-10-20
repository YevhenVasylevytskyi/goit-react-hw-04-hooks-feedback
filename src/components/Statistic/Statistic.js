import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistic.module.css';

function Statistic({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={style.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>
        {/* PositiveFeedback:{' '}
        {Number.isNaN(positivePercentage) ? 0 : positivePercentage} */}
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistic;
