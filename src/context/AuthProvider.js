import { useContext, createContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const [fullName, setFullName] = useState(
    localStorage.getItem("username") || null
  );
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  console.log("fullName:", fullName);

  // const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("site");

    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }
  }, []);

  const loginAction = async (data) => {
    try {
      const response = await fetch("https://api.goexpertly.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res) {
        // console.log("res.userId:", res.userId);
        setUser(res.userId);
        setToken(res.token);
        localStorage.setItem("user", res.userId);
        localStorage.setItem("site", res.token);
        // navigate("/");

        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("user");
    localStorage.removeItem("site");
    toast.success("You have successfully logged out");

    // navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        setFullName,
        setUser,
        setToken,
        loginAction,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
