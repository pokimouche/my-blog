import React from "react";

const ItemDescription = props => {
  return (
    <div>
      <h4>{props.descriptionName}</h4>

      <div className="description-box"></div>
      <p>{props.text}</p>
    </div>
  );
};

export default ItemDescription;
