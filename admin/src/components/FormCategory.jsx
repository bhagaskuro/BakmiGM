import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../store/actions/categories";
import { useDispatch } from "react-redux";

export default function FormCategory({ category }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addCategory(form)).then(() => {
      navigate("/categories");

      setForm({
        name: "",
      });
    });
  };
  return (
    <>
      <h1>ADD NEW CATEGORY</h1>

      <form>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Category Name</span>
          </label>
          <input
            name="name"
            onChange={handleChange}
            value={form.name}
            type="text"
            placeholder="Category Name"
            className="input input-bordered w-full"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </>
  );
}
