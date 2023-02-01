import GlobalStyles from './styles/GlobalStyles';
import { Routes, Route, useLocation } from 'react-router-dom';
import Enroll from './pages/Enroll';
import SignIn from './pages/SignIn';

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyles />
      <Routes location={location} key={location.pathname}>
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
