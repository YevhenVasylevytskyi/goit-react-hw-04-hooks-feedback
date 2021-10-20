import React from 'react';
import PropTypes from 'prop-types';
import style from './Notification.module.css';

function Notification({ message }) {
  return <p className={style.text}>{message}</p>;
}

Notification.protoType = {
  message: PropTypes.string,
};

export default Notification;
