import React, { useState } from "react";

const Rating = () => {
  const [rated, setRated] = useState(0);

  const handleClick = (e) => {
    setRated(e.target.value);
  };

  return (
    <ul className="stars">
      <li
        title="1"
        value={1}
        className={rated >= 1 ? "star_true" : "star_false"}
        onClick={handleClick}
      >
        &#9733;
      </li>
      <li
        title="2"
        value={2}
        className={rated >= 2 ? "star_true" : "star_false"}
        onClick={handleClick}
      >
        &#9733;
      </li>
      <li
        title="3"
        value={3}
        className={rated >= 3 ? "star_true" : "star_false"}
        onClick={handleClick}
      >
        &#9733;
      </li>
      <li
        title="4"
        value={4}
        className={rated >= 4 ? "star_true" : "star_false"}
        onClick={handleClick}
      >
        &#9733;
      </li>
      <li
        title="5"
        value={5}
        className={rated >= 5 ? "star_true" : "star_false"}
        onClick={handleClick}
      >
        &#9733;
      </li>
    </ul>
  );
};

export default Rating;
