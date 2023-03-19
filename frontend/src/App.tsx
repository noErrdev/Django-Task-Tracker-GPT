import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/index.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
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
            <Route element={<PublicRoutes />}>
              <Route path="/" element={<Login />} />
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
