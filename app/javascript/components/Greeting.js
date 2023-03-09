import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from "../redux/greetings/greetReducer";

import './greetings.css'


function Greeting() {
  const dispatch = useDispatch();
  const greet = useSelector((state) => state.greet);
  console.log(getGreeting());
  useEffect(()=> {
    dispatch(getGreeting())
  }, [dispatch]);

  return (
    <h1>{greet}</h1>
  );
}

export default Greeting;