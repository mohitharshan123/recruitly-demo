import { Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { ROUTES } from "./constants";
import Dashboard from "./containers/Dashboard";
import AuthenticationForm from "./containers/Authentication";

import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import { queryClient } from "./queryClient";

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            path={"/"}
            element={<ProtectedRoute component={Dashboard} />}
          />
          <Route
            path={ROUTES.root}
            element={<ProtectedRoute component={Dashboard} />}
          />
          <Route
            path={ROUTES.authentication}
            element={<PublicRoute component={AuthenticationForm} />}
          />
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
