import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(el => {
        return (
          <button
            type="button"
            className={style.button}
            key={el}
            onClick={onLeaveFeedback}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.protoType = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
