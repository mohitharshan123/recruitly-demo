import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ROUTES } from "./constants";
import Dashboard from "./containers/Dashboard";
import AuthenticationForm from "./containers/Authentication";

import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

const queryClient = new QueryClient();

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
            path={ROUTES.dashboard}
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
