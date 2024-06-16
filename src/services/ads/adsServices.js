import axios from "axios";

const API_URL = "http://localhost:5000/api/ads";

// data pvz.:
// data = {
//     name: "...",
//     surname: "...",
//     specialization: "...",
//     serviceName: "...",
//     img: "...",
//     city: "...",
// }

//GET Services
export const getServices = (setData) => {
  axios
    .get(API_URL)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => console.error(err));
};
//GET user Services
export const getUserServices = (setData, userToken) => {
  axios
    .get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => console.error(err));
};
//POST Service
export const createService = (data, userToken) => {
  axios
    .post(API_URL, data, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => alert("Created"))
    .catch((err) => console.error(err));
};
//Update Service
export const updateService = (data, adId, userToken) => {
  axios
    .put(`${API_URL}/${adId}`, data, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => alert("Updated"))
    .catch((err) => console.error(err));
};
// Delete Service
export const deleteService = (adId, userToken) => {
  axios
    .delete(`${API_URL}/${adId}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => alert("Deleted"))
    .catch((err) => console.error(err));
};
