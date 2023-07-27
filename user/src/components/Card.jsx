import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ cuisine }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${cuisine.id}`);
  };

  return (
    <>
      <div className="card w-100 shadow-xl" onClick={handleClick}>
        <figure>
          <img className="w-full" src={cuisine.imgUrl} alt="Bakmi Special GM" />
        </figure>
        <div className="card-body  text-center items-center">
          <h2 className="card-title"> {cuisine.name} </h2>
        </div>
      </div>
    </>
  );
}
