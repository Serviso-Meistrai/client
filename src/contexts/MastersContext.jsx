import { getMasters, saveMaster } from "@/services/mastersServices";
import { createContext, useContext, useEffect, useReducer } from "react";

const MastersContext = createContext();

const BASE_URL = "http://localhost:5000/api/ads";

const initialState = {
  name: "",
  surname: "",
  specialization: "",
  img: "",
  serviceName: "",
  city: "",
  masters: [],
  filteredMasters: [],
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
    case "masters/set":
      return {
        ...state,
        masters: action.payload,
      };
    case "masters/filtered":
      return {
        ...state,
        filteredMasters: action.payload,
      };

    default:
      return state;
  }
}

function MastersProvider({ children }) {
  const [{ name, surname, specialization, img, serviceName, city }, dispatch] =
    useReducer(reducer, initialState);

  // useEffect(() => {
  //   const masters = getMasters();
  //   console.log(masters);
  // }, []);

  async function createMaster(
    name,
    surname,
    specialization,
    img,
    serviceName,
    city,
  ) {
    const userData = JSON.parse(localStorage.getItem("userData"));

    saveMaster(
      {
        name: name,
        surname: surname,
        specialization: specialization,
        img: img,
        serviceName: serviceName,
        city: city,
        user: userData._id,
      },
      userData.token,
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
  }

  return (
    <MastersContext.Provider
      value={{
        name,
        surname,
        specialization,
        img,
        serviceName,
        city,
        createMaster,
        dispatch,
      }}
    >
      {children}
    </MastersContext.Provider>
  );
}

function useMaster() {
  const context = useContext(MastersContext);
  if (context === undefined)
    throw new Error("MastersContext was used outside MastersProvider");
  return context;
}

export { MastersProvider, useMaster };
