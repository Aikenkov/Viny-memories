import GlobalStyles from './styles/GlobalStyles';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from './hooks/useToken';
import { UserProvider } from './contexts/UserContext';
import Enroll from './pages/Enroll';
import SignIn from './pages/SignIn';

export default function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer theme="dark" />
      <GlobalStyles />
      <UserProvider>
        <Routes location={location} key={location.pathname}>
          {/* <Route
                path="/dashboard"
                element={
                  <ProtectedRouteGuard>
                    <Dashboard />
                  </ProtectedRouteGuard>
                }
              /> */}

          <Route path="/enroll" element={<Enroll />} />
          <Route path="/" element={<SignIn />} />
        </Routes>
      </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}
