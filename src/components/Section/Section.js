import React from 'react';
import PropTypes from 'prop-types';
import style from './Section.module.css';

function Section({ title, children }) {
  return (
    <section>
      <h1 className={style.title}>{title}</h1>
      {children}
    </section>
  );
}

Section.protoType = {
  title: PropTypes.string,
};

export default Section;
