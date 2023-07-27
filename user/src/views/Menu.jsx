import React from "react";
import Card from "../components/card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCuisines } from "../store/actions/cuisines";
import { useState } from "react";

export default function Menu() {
  const cuisines = useSelector((state) => {
    return state.cuisines;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCuisines());
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
    <>
      <div className="container mx-auto px-20 py-10">
        <div className="grid grid-cols-4 gap-4">
          {cuisines.map((el) => (
            <Card key={el.id} cuisine={el} />
          ))}
        </div>
      </div>
    </>
  );
}
