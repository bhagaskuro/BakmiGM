import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  fetchIngredients,
  deleteIngredient,
} from "../store/actions/ingredients.js";

export default function ingredients() {
  const ingredients = useSelector((state) => {
    return state.ingredients;
  });

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteIngredient(id));
  };
  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (ingredients.length !== 0) {
      setLoading(false);
    }
  }, [ingredients]);

  if (loading) {
    return (
      <div className="flex justify-center ">
        <span className="loading loading-bars loading-lg  "></span>{" "}
      </div>
    );
  }
  return (
    <div>
      <Link to="../formIngredient">
        <a className="btn">ADD INGREDIENT</a>
      </Link>
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th width={25}>#</th>
            <th width={1050}>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((el, i) => {
            return (
              <tr key={i}>
                <td> {++i}</td>
                <td> {el.name} </td>
                <td>
                  {/* <button className="btn">EDIT</button>
                  {"  "} */}
                  <button onClick={() => handleDelete(el.id)} className="btn">
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
