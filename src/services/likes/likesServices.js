import axios from "axios";

// data pvz.:
// data = {
//     value: "..", 
//     ad: "ad_id"
// }

// Post Likes
export const createLike = (userToken) => {
    axios
        .post(`http://localhost:5000/api/likes`, data, {
            headers:{
                Authorization: `Bearer ${userToken}`,
                'Content-Type': 'application/json',
            }
        .then((res)=>alert("liked"))
        .catch((err)=>console.error(err))
        })
}

// Update Like

export const updateLike = ()=>{
    axios
    .post(`http://localhost:5000/api/likes/${adId}`, data, {
    headers:{
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
    }
    .then((res)=>alert("liked"))
    .catch((err)=>console.error(err))
    })
}