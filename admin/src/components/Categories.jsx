import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories, deleteCategory } from "../store/actions/categories";

export default function Categories() {
  const categories = useSelector((state) => {
    return state.categories;
  });

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };

  // const handleEdit = (category) => {
  //   <FormCategory category={category} />;
  //   navigate("/formCategory");
  // };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (categories.length !== 0) {
      setLoading(false);
    }
  }, [categories]);

  if (loading) {
    return (
      <div className="flex justify-center ">
        <span className="loading loading-bars loading-lg  "></span>{" "}
      </div>
    );
  }
  return (
    <div>
      <Link to="../formCategory">
        <a className="btn">ADD CATEGORY</a>
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
          {categories.map((el, i) => {
            return (
              <tr key={i}>
                <td> {++i} </td>
                <td> {el.name} </td>
                <td>
                  {/* <button onClick={() => handleEdit(el)} className="btn">
                    EDIT
                  </button> */}
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
