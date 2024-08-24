import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Layout from "../layout/Layout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { AuthProvider } from "../context/authContext";
import Quize from "../pages/Quize";
import Result from "../pages/Result";
import Home from "../pages/Home";
import ProtectedRoutes from "../routes/ProtectedRoutes";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quize" element={<Quize />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
