import axios from "axios";
import { createContext, useContext, useReducer } from "react";

const ServicesContext = createContext();

const BASE_URL = "http://localhost:5000/api/ads";

const initialState = {
  name: "",
  surname: "",
  specialization: "",
  img: "",
  serviceName: "",
  city: "",
};

function reducer(action, state) {
  switch (action.type) {
    case "ads/create":
      return {
        ...state,
        name: action.payload.name,
        surname: action.payload.surname,
        specialization: action.payload.specialization,
        img: action.payload.img,
        serviceName: action.payload.serviceName,
        city: action.payload.city,
      };

    default:
      return state;
  }
}

function ServiceProvider({ children }) {
  const [{ name, surname, specialization, img, serviceName, city }, dispatch] =
    useReducer(reducer, initialState);

  async function createAd(
    name,
    surname,
    specialization,
    img,
    serviceName,
    city,
  ) {
    const userData = JSON.parse(localStorage.getItem("userData"));

    try {
      await axios.post(
        BASE_URL,
        {
          name,
          surname,
          specialization,
          img,
          serviceName,
          city,
          user: userData._id,
        },
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
            "Content-Type": "application/json",
          },
        },
      );

      dispatch({
        type: "ads/create",
        payload: {
          name,
          surname,
          specialization,
          img,
          serviceName,
          city,
        },
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <ServicesContext.Provider
      value={{
        name,
        surname,
        specialization,
        img,
        serviceName,
        city,
        createAd,
        dispatch,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
}

function useService() {
  const context = useContext(ServicesContext);
  if (context === undefined)
    throw new Error("ServiceContext was used outside ServicesProvider");
  return context;
}

export { ServiceProvider, useService };
