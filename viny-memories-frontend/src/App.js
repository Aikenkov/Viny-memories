import GlobalStyles from './styles/GlobalStyles';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './components/contexts/userContexts';

function App() {
  const location = useLocation();
  const localStorageUser = JSON.parse(localStorage.getItem('userAutorriculo'));
  const [reload, setReload] = useState(0);
  const [users, setUsers] = useState();

  return (
    <>
      <UserContext.Provider
        value={{
          users,
          setUsers,
          reload,
          setReload,
        }}
      >
        <GlobalStyles />
        <Routes location={location} key={location.pathname}>
          {/* <Route path='/sign-up/' element={<SignUp />} /> */}
          {/* <Route
                        path='/'
                        element={
                            loggedUser ? (
                                <Navigate replace to={"/home"} />
                            ) : (
                                <SignIn />
                            )
                        }
                    /> */}
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
