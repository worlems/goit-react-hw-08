import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "./components/Loader/Loader.jsx";
import RestrictedRoute from "./components/RestrictedRoute.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Layout from "./components/Layout/Layout.jsx";
import { refreshUser } from "./redux/auth/operations.js";
import {
  selectIsRefreshing,
  selectIsLoggedIn,
} from "./redux/auth/selectors.js";
import { selectLoading } from "./redux/contacts/selectors.js";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const ContactsPage = lazy(() =>
  import("./pages/ContactsPage/ContactsPage.jsx")
);
const RegisterPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage.jsx")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <Loader />;

  return (
    <Layout>
      {isLoading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              isLoggedIn ? (
                <Navigate to="/contacts" />
              ) : (
                <RestrictedRoute
                  component={<RegisterPage />}
                  redirectTo="/contacts"
                />
              )
            }
          />
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/contacts" />
              ) : (
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              )
            }
          />
          <Route
            path="/contacts"
            element={
              isLoggedIn ? (
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
