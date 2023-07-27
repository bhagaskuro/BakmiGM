import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addCuisine } from "../store/actions/cuisines";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../store/actions/categories";
import { fetchIngredients } from "../store/actions/ingredients.js";

export default function FormCuisine() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categories = useSelector((state) => {
    return state.categories;
  });

  const ingredients = useSelector((state) => {
    return state.ingredients;
  });

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchIngredients());
  }, []);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    imgUrl: "",
    categoryId: null,
    ingredient: [],
  });

  function handleChange(event) {
    if (event.target.name == "categoryId") {
      setForm({
        ...form,
        [event.target.name]: +event.target.value,
      });
    } else {
      setForm({
        ...form,
        [event.target.name]: event.target.value,
      });
    }
  }

  function handleIngredient(event) {
    const newForm = { ...form };
    if (event.target.name == "bahan1") {
      newForm.ingredient[0] = +event.target.value;
    }
    if (event.target.name == "bahan2") {
      newForm.ingredient[1] = +event.target.value;
    }
    if (event.target.name == "bahan3") {
      newForm.ingredient[2] = +event.target.value;
    }

    setForm(newForm);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newForm = { ...form, ingredient: JSON.stringify(form.ingredient) };

    dispatch(addCuisine(newForm)).then(() => {
      navigate("/home");

      setForm({
        name: "",
        description: "",
        price: 0,
        imgUrl: "",
        categoryId: null,
        ingredient: ["", "", ""],
      });
    });
  };
  return (
    <>
      <h1>ADD NEW CUISINE</h1>

      <form>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Cuisine Name</span>
          </label>
          <input
            name="name"
            onChange={handleChange}
            value={form.name}
            type="text"
            placeholder="Cuisine Name"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            onChange={handleChange}
            value={form.description}
            className="textarea textarea-bordered h-24"
            placeholder="Description"
          ></textarea>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            name="price"
            onChange={handleChange}
            value={form.price}
            type="number"
            placeholder="Cuisine Price"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input
            name="imgUrl"
            onChange={handleChange}
            value={form.imgUrl}
            type="text"
            placeholder="Cuisine Image URL"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            className="select select-bordered"
            name="categoryId"
            onChange={handleChange}
            value={form.categoryId}
          >
            <option disabled selected>
              Pick one
            </option>
            {categories.map((el, i) => {
              return (
                <option key={i} value={el.id}>
                  {el.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Ingredient</span>
          </label>
          <select
            className="select select-bordered"
            name="bahan1"
            onChange={handleIngredient}
            value={form.ingredient[0]}
          >
            <option disabled selected>
              Ingredient 1
            </option>
            {ingredients.map((el, i) => {
              return (
                <option key={i} value={el.id}>
                  {el.name}
                </option>
              );
            })}
          </select>
          <br />
          <select
            className="select select-bordered"
            name="bahan2"
            onChange={handleIngredient}
            value={form.ingredient[1]}
          >
            <option disabled selected>
              Ingredient 2
            </option>
            {ingredients.map((el, i) => {
              return (
                <option key={i} value={el.id}>
                  {el.name}
                </option>
              );
            })}
          </select>
          <br />
          <select
            className="select select-bordered"
            name="bahan3"
            onChange={handleIngredient}
            value={form.ingredient[2]}
          >
            <option disabled selected>
              Ingredient 3
            </option>
            {ingredients.map((el, i) => {
              return (
                <option key={i} value={el.id}>
                  {el.name}
                </option>
              );
            })}
          </select>
        </div>
        <br />
        <button type="submit" className="btn btn-submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </>
  );
}
