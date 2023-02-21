import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import style from './HelloWorld.module.css';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from '../../../redux/store';
import {getGreeting} from '../../../redux/greetings/greetReducer';


const HelloWorld = () => {

  const greet = useSelector(state => state.greet);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getGreeting())
  }, [dispatch]);

  return (
    <div className='banner'>
      <p>{greet}</p>
    </div>
  );
};


export default () => (
  <Provider store={store}>
    <HelloWorld />
  </Provider>
);
