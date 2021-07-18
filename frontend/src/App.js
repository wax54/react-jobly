import NavBar from './NavBar';
import Routes from './Routes';
import UserContext from './UserContext';
import JoblyApi from './api';

import './App.css';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState({});
  console.log("user in App", user);

  const registerUser = async (userData) => {
    try { 
      const token = await JoblyApi.register(userData);
      userData.token = token;
      setUser(userData);
      return {status: true, user: userData};
    } catch (e) {
      console.error(e);
      return {status: false, errors: e};
    }
  } ;
  

  const loginUser = async (userData) => {
    try {
      const token = await JoblyApi.login(userData);
      userData.token = token;
      setUser(userData);
      return { status: true, user: userData };
    } catch (e) {
      return { status: false, errors: e };
    }
  };

  return (
    <div className="App">
      <UserContext.Provider value={{user, registerUser, loginUser}} >
        <NavBar />
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
