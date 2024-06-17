import { getServices, saveService } from "@/services/servicesServices";
import { createContext, useContext, useEffect, useReducer } from "react";

const ServiceContext = createContext();

const initialState = {
  name: "",
  services: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "service/create":
      return {
        ...state,
        name: action.payload.name,
      };
    case "service/set":
      return {
        ...state,
        services: action.payload,
      };
    default:
      return state;
  }
}

function ServiceProvider({ children }) {
  const [{ name, services }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchServices() {
      const setData = (services) => {
        dispatch({ type: "service/set", payload: services });
        console.log(services);
      };
      await getServices(setData);
    }

    fetchServices();
  }, []);

  async function createService(name) {
    const userData = JSON.parse(localStorage.getItem("userData"));
    saveService({ name }, userData.token);
  }

  return (
    <ServiceContext.Provider
      value={{ name, createService, services, dispatch }}
    >
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
