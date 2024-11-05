import React from "react";
import "./category.css";
import { useNavigate } from "react-router-dom";
import { ALLOEWD_CATEGORIES } from "../../route";

function Category({ image, title }) {
  const navigate = useNavigate();
  return (
    <div className="category">
      <img src={image} alt={title} />
      <button
        onClick={() =>
          navigate(
            `/products/${
              title.toLowerCase() === "women's clothing"
                ? ALLOEWD_CATEGORIES.WOMENS
                : ALLOEWD_CATEGORIES.MENS
            }`
          )
        }
      >
        {title}
      </button>
    </div>
  );
}

export default Category;
