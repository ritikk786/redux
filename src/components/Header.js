import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../Store/auth';

const Header = () => {
  const islogin =  useSelector((state)=>state.auth.islogin)
  const dispatch = useDispatch();
  const logout = ()=>{
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {islogin &&
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
}
      </nav>
    </header>
  );
};

export default Header;
