import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCuisine } from "../store/actions/cuisines";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const cuisine = useSelector((state) => {
    return state.cuisineDetail;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCuisine(id));
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (cuisine !== null) {
      setLoading(false);
    }
  }, [cuisine]);

  if (loading) {
    return (
      <div className="flex justify-center ">
        <span className="loading loading-bars loading-lg  "></span>{" "}
      </div>
    );
  }

  return (
    <>
      <div className="px-20">
        <div className="container mx-auto px-20 py-10">
          <button className="font-bold" onClick={() => navigate(-1)}>
            <span>&#60;</span> BACK
          </button>

          <br />
          <br />

          <div className="flex">
            <img className="rounded-xl" src={cuisine.imgUrl} alt="" />
            <div className="px-20">
              <h1 className="font-bold text-4xl">{cuisine.name} </h1>

              <p className="font-bold italic pt-5">
                {cuisine.Category.name} | Rp. {cuisine.price}
              </p>

              <p className=" italic pt-5">{cuisine.description}</p>

              <br />
              <hr />

              <p className="font-bold text-2xl pt-5">Ingredient</p>

              <ul className="menu menu-horizontal">
                {cuisine.Ingredients.length == 0 && <h2>No Ingredient</h2>}
                {cuisine.Ingredients.length > 0 &&
                  cuisine.Ingredients.map((el, i) => {
                    return (
                      <li key={i} className="pr-5 font-bold pt-5">
                        - {el.name}
                      </li>
                    );
                  })}
              </ul>

              <br />
              <br />
              <hr />

              <div className="author italic pt-5">
                Author : {cuisine.User.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
