import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../Store/counter';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter)
  const show = useSelector((state) => state.counter.showtoggle)
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.showtoggle())
  };
  const incrementhandler = ()=>{
    dispatch(counterActions.increment(5))
  }
  const decreenthandler = ()=>{
    dispatch (counterActions.decrement(5))
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementhandler}>Increment</button>
        <button onClick={decreenthandler}> Decreent</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
