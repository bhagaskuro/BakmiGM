import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../store/actions/user";
import { useDispatch } from "react-redux";

export default function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(register(form)).then(() => {
      navigate("/home");

      setForm({
        name: "",
      });
    });
  };
  return (
    <>
      <h1>ADD NEW USER</h1>

      <form>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            onChange={handleChange}
            value={form.email}
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            onChange={handleChange}
            value={form.password}
            type="password"
            placeholder="Password"
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
