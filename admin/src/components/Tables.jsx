import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCuisines, deleteCuisine } from "../store/actions/cuisines";

export default function Tables() {
  const cuisines = useSelector((state) => {
    return state.cuisines;
  });

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCuisine(id));
  };

  // const handleEdit = (id) => {
  //   dispatch(fetchCuisine(id));

  //   if (cuisine !== null) {
  //     console.log(cuisine);
  //     navigate("/formCuisine");
  //   }
  // };

  useEffect(() => {
    dispatch(fetchCuisines());
    if (cuisines.length !== 0) {
      setLoading(false);
    }
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (cuisines.length !== 0) {
      setLoading(false);
    }
  }, [cuisines]);

  if (loading) {
    return (
      <div className="flex justify-center ">
        <span className="loading loading-bars loading-lg  "></span>{" "}
      </div>
    );
  }
  return (
    <div>
      <Link to="../formCuisine">
        <a className="btn">ADD CUISINE</a>
      </Link>
      <br />
      *note : Dikarenakan kesalahan Assosiation dalam model, edit tidak dapat
      digunakan.
      <br />
      <table className="table">
        <thead>
          <tr>
            <th width={25}>#</th>
            <th>Name</th>
            <th width={400}>Description</th>
            <th>Price</th>
            <th width={100}>Image</th>
            <th>Author</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cuisines.map((el, i) => {
            return (
              <tr key={i}>
                <td> {++i} </td>
                <td> {el.name} </td>
                <td>{el.description} </td>
                <td>{el.price}</td>
                <td>
                  <img src={el.imgUrl} alt="" />
                </td>
                <td>{el.User.email}</td>
                <td>{el.Category.name}</td>
                <td>
                  <button
                    disabled
                    onClick={() => handleEdit(el.id)}
                    className="btn"
                  >
                    EDIT
                  </button>
                  {"  "}
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
