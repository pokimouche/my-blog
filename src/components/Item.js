import React from "react";
import ItemTitle from "./ItemTitle";
import ItemDescription from "./ItemDescription";

const Item = props => {
  return (
    <div className="item">
      <ItemTitle name={props.name}></ItemTitle>
      <ItemDescription
        descriptionName={props.descriptionName}
        text={props.text}
      ></ItemDescription>
    </div>
  );
};

export default Item;
