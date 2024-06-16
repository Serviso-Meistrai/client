import axios from "axios";

// data pvz.:
// data = {
//     name: "...",
//     surname: "...",
//     specialization: "...",
//     serviceName: "...",
//     img: "...",
//     city: "...",
// }

//GET Masters
export const getMasters = (setData) => {
  axios
    .get(`http://localhost:5000/api/ads`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => console.error(err));
};
//GET user Masters
export const getUserMasters = (setData, userToken) => {
  axios
    .get(`http://localhost:5000/api/ads/user`, {
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
//POST Master
export const createMaster = (data, userToken) => {
  axios
    .post(`http://localhost:5000/api/ads`, data, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};
//Update Master
export const updateMaster = (data, adId, userToken, setData) => {
  axios
    .put(`http://localhost:5000/api/ads/${adId}`, data, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => getMasters(setData))
    .catch((err) => console.error(err));
};
// Delete Master
export const deleteMaster = (adId, userToken) => {
  axios
    .delete(`http://localhost:5000/api/ads/${adId}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => getMasters(setData))
    .catch((err) => console.error(err));
};
