import axios from "axios";

//GET Services
export const getServices = (setData) => {
  axios
    .get(`http://localhost:5000/api/service`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => console.error(err));
};

//POST Service
export const saveService = (data, userToken, setData) => {
  axios
    .post(`http://localhost:5000/api/service`, data, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => getServices(setData))
    .catch((err) => console.error(err));
};
//Update Service
export const updateService = (data, serviceId, userToken) => {
  axios
    .put(`http://localhost:5000/api/service/${serviceId}`, data, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};
// Delete Service
export const deleteService = (serviceId, userToken, setData) => {
  axios
    .delete(`http://localhost:5000/api/ads/${serviceId}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => getServices(setData))
    .catch((err) => console.error(err));
};
