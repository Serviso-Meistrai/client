import axios from "axios";
import { createContext, useContext, useReducer } from "react";

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
        username: action.payload,
        email: action.payload,
        password: action.payload,
        repeatPassword: action.payload,
        isAuthenticated: true,
      };
    case "login":
      return {
        ...state,
        email: action.payload,
        password: action.payload,
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

      dispatch({
        type: "login",
        payload: {
          email,
          password,
        },
      });

      const { token, username, _id } = res.data;

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
