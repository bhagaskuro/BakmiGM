import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addIngredient } from "../store/actions/ingredients";
import { useDispatch } from "react-redux";

export default function FormIngredient() {
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

    dispatch(addIngredient(form)).then(() => {
      navigate("/ingredients");

      setForm({
        name: "",
      });
    });
  };
  return (
    <>
      <h1>ADD NEW INGREDIENT</h1>

      <form>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Ingredient Name</span>
          </label>
          <input
            name="name"
            onChange={handleChange}
            value={form.name}
            type="text"
            placeholder="Ingredient Name"
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
