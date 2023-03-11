import React from "react";
import { useParams } from "react-router-dom";

const Favorates = () => {
  let params = useParams();
  console.log(params["*"]);
  return <div>Favorates</div>;
};

export default Favorates;
