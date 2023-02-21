import PropTypes from 'prop-types';
import React, { useState } from 'react';
import style from './HelloWorld.module.css';
import { Provider, useSelector } from 'react-redux';
import store from '../../../redux/store';


const HelloWorld = () => {

  const greet = useSelector(state => state.greet);

  return (
    <div className='banner'>
      <h3>{greet}</h3>
      <hr />
    </div>
  );
};


export default () => (
  <Provider store={store}>
    <HelloWorld />
  </Provider>
);
