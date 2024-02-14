// App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Signin from "./pages/Signin";
import ProtectedRoute from "./components/protectedRoute";
import Home from "./pages/Home";
import axios from "axios";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = "Bearer " + localStorage.getItem("token");
        const response = await axios.get("https://dummyjson.com/auth/me", {
          headers: {
            authorization: token,
          },
        });

        if (response.data) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (error) {
        setIsAuth(false);
      } finally {
        if (isAuth) {
          navigate("/home");
        }
      }
    };

    fetchUser();
  }, [isAuth, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Signin setIsAuth={setIsAuth} />} />
      <Route element={<ProtectedRoute isAuth={isAuth} setIsAuth={setIsAuth} />}>
        <Route path="/home" element={<Home setIsAuth={setIsAuth} />} />
      </Route>
    </Routes>
  );
};

export default App;
