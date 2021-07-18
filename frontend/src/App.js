import NavBar from './NavBar';
import Routes from './Routes';
import UserContext from './UserContext';
import JoblyApi from './api';

import './App.css';
import { useEffect, useState } from 'react';
import { useLocalStorageState } from './Hooks';

function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useLocalStorageState("authToken", "");

  useEffect(() =>{
    const updateCurrentUser = async () => {
      try {
        const userData = await JoblyApi.getUserData()
        setUser(userData);
      } catch {
        setUser({});
      }
    }
    JoblyApi.token = token;
    updateCurrentUser()
  }, [token])


  const registerUser = async (userData) => {
    try { 
      const token = await JoblyApi.register(userData);
      setToken(token);
      return { status: true };
    } catch (e) {
      console.error(e);
      return { status: false, errors: e };
    }
  } ;
  

  const loginUser = async (userData) => {
    try {
      const token = await JoblyApi.login(userData);
      setToken(token);
      return { status: true };
    } catch (e) {
      return { status: false, errors: e };
    }
  };

  const logoutUser = () => {
    setToken("");
  };

  return (
    <div className="App">
      <UserContext.Provider value={{user, registerUser, loginUser, logoutUser}} >
        <NavBar />
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
