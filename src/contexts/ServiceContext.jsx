import { saveService } from "@/services/servicesServices";
import { createContext, useContext, useReducer } from "react";

const ServiceContext = createContext();

const initialState = {
  name: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "service/create":
      return {
        ...state,
        name: action.payload.name,
      };
    case "service/edit":
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
}

function ServiceProvider({ children }) {
  const [{ name }, dispatch] = useReducer(reducer, initialState);

  async function createService(name) {
    const userData = JSON.parse(localStorage.getItem("userData"));
    saveService({ name }, userData.token);
  }

  return (
    <ServiceContext.Provider value={{ name, createService, dispatch }}>
      {children}
    </ServiceContext.Provider>
  );
}

function useService() {
  const context = useContext(ServiceContext);
  if (context === undefined)
    throw new Error("Service Context was used outside ServiceProvider");
  return context;
}

export { ServiceProvider, useService };
