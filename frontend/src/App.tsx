import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/index.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Landing from "./pages/Landing";
import TermsOfSercices from "./pages/TermsOfServices";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import PrivateRoutes from "./utils/PrivateRoutes";
import PublicRoutes from "./utils/PublicRoutes";
import { injectStore } from "./utils/axiosInstance";
injectStore(store);

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/legal" element={<TermsOfSercices />} />
            <Route path="/" element={<Landing />} />

            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>

            <Route element={<PrivateRoutes />}>
              <Route path="/dashboard/*" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
