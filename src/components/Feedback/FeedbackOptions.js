import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(el => {
        return (
          <button
            type="button"
            className={style.button}
            key={el}
            onClick={() => onLeaveFeedback(el)}
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

export default FeedbackOptions;
