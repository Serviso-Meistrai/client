import axios from "axios";

// data pvz.:
// data = {
//     value: "..", 
//     ad: "ad_id"
// }

// Post Likes
export const createLike = (data, userToken) => {
    console.log(data);
    axios
        .post(`http://localhost:5000/api/likes`, data, {
            headers:{
                Authorization: `Bearer ${userToken}`,
                'Content-Type': 'application/json',
            }
        })
        .then((res)=>alert("liked"))
        .catch((err)=>console.error(err))
}

// Update Like

export const updateLike = (data, userToken, likeId)=>{
    axios
    .put(`http://localhost:5000/api/likes/${likeId}`, data, {
    headers:{
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
    }
    })
    .then((res)=>alert("like updated"))
    .catch((err)=>console.error(err))
}