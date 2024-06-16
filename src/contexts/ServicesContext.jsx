import { createService, getServices } from "@/services/ads/adsServices";
import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const ServicesContext = createContext();

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

    createService(
      {
        name,
        surname,
        specialization,
        img,
        serviceName,
        city,
        user: userData._id,
      },
      userData.token,
    );
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
