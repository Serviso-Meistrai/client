import { createLike, updateLike } from "@/services/likesServices";
import React, { useEffect, useState } from "react";

const Rating = ({ master, setMasters }) => {
  const [rated, setRated] = useState(0);
  const [ratedA, setRatedA] = useState(0);
  const token = JSON.parse(localStorage.getItem("userData"))?.token;
  const userId = JSON.parse(localStorage.getItem("userData"))?._id;
  const adId = master._id;
  const [likeId, setLikeId] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let sum = 0;
    let count = 0;
    master?.likes.forEach((like) => {
      if (userId === like.user) {
        setRated(like.value);
        setLikeId(like._id);
      }
      count = count + 1;
      sum = sum + like.value;
      sum = sum / count;

      setRatedA(sum);
      setCounter(count);
    });
  }, [master]);
  const handleClick = (e) => {
    if (rated == 0) {
      setRated(e.target.value);
      createLike({ value: e.target.value, adId: adId }, token, setMasters);
    } else {
      setRated(e.target.value);
      updateLike(
        { value: e.target.value, adId: adId },
        token,
        likeId,
        setMasters,
      );
    }
  };

  return (
    <div className="rating">
      {token ? (
        <ul className="stars">
          <h6>My rating: </h6>
          <li
            title="1 Star"
            value={1}
            className={rated >= 1 ? "star_true" : "star_false"}
            onClick={handleClick}
          >
            &#9733;
          </li>
          <li
            title="2 Stars"
            value={2}
            className={rated >= 2 ? "star_true" : "star_false"}
            onClick={handleClick}
          >
            &#9733;
          </li>
          <li
            title="3 Stars"
            value={3}
            className={rated >= 3 ? "star_true" : "star_false"}
            onClick={handleClick}
          >
            &#9733;
          </li>
          <li
            title="4 Stars"
            value={4}
            className={rated >= 4 ? "star_true" : "star_false"}
            onClick={handleClick}
          >
            &#9733;
          </li>
          <li
            title="5 Stars"
            value={5}
            className={rated >= 5 ? "star_true" : "star_false"}
            onClick={handleClick}
          >
            &#9733;
          </li>
        </ul>
      ) : null}
      <ul className="stars_avarage">
        <h6>Average: </h6>
        <li
          title="1 Star"
          className={ratedA >= 0.5 ? "star_true" : "star_false"}
        >
          &#9733;
        </li>
        <li
          title="2 Stars"
          className={ratedA >= 1.5 ? "star_true" : "star_false"}
        >
          &#9733;
        </li>
        <li
          title="3 Stars"
          className={ratedA >= 2.5 ? "star_true" : "star_false"}
        >
          &#9733;
        </li>
        <li
          title="4 Stars"
          className={ratedA >= 3.5 ? "star_true" : "star_false"}
        >
          &#9733;
        </li>
        <li
          title="5 Stars"
          className={ratedA >= 4.5 ? "star_true" : "star_false"}
        >
          &#9733;
        </li>
        <h6>({counter})</h6>
      </ul>
    </div>
  );
};

export default Rating;
