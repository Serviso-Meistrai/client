import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const AuthContext = createContext();

const BASE_URL = "http://localhost:5000/api/users";

const initialState = {
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "register":
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        repeatPassword: action.payload.repeatPassword,
        isAuthenticated: true,
      };
    case "login":
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        isAuthenticated: true,
      };
    case "logout":
      return {
        ...state,
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
        isAuthenticated: false,
      };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [
    { username, email, password, repeatPassword, isAuthenticated },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    const storeUserData = localStorage.getItem("userData");
    if (storeUserData) {
      const { username, email } = JSON.parse(storeUserData);
      dispatch({
        type: "login",
        payload: { username, email },
      });
      console.log(username);
    }
  }, []);

  async function register(username, email, password, repeatPassword) {
    try {
      const res = await axios.post(BASE_URL, {
        username,
        email,
        password,
      });

      dispatch({
        type: "register",
        payload: {
          username,
          email,
          password,
          repeatPassword,
        },
      });

      localStorage.setItem("userData", JSON.stringify({ username, email }));

      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

  async function login(email, password) {
    try {
      const res = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });

      const { token, username, _id } = res.data;

      dispatch({
        type: "login",
        payload: {
          username,
          email,
        },
      });

      localStorage.setItem(
        "userData",
        JSON.stringify({ token, username, _id }),
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

  function logout() {
    localStorage.removeItem("userData");
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{
        username,
        email,
        password,
        repeatPassword,
        isAuthenticated,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside the AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
