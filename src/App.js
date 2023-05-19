import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';


function App() {
 const islogin =  useSelector((state)=>state.auth.islogin)
  return (
    <Fragment>
      <Header/>
     {!islogin && <Auth/>} 
     {islogin && <UserProfile/>}
    <Counter />
    </Fragment>
  );
}

export default App;
