import React from "react";
import "./category.css";
function Category({ image, title }) {
  return (
    <div className="category">
      <img src={image} alt={title} />
      <button>
        <a href="#">{title}</a>
      </button>
    </div>
  );
}

export default Category;
