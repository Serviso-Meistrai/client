import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export async function login(email, password) {
  try {
    const res = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    const { token, username, _id } = res.data;

    localStorage.setItem("userData", JSON.stringify({ token, username, _id }));

    console.log(res);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}
