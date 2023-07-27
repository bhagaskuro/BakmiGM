import React from "react";
import Carousel from "../components/Carousel";
import Gallery from "../components/Gallery";
import Card from "../components/card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCuisines } from "../store/actions/cuisines";
import { useState } from "react";

export default function Home() {
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
      <Carousel />
      <div className="container mx-auto px-20 pt-10">
        <br />
        <div className="grid grid-cols-3 gap-4">
          {cuisines.slice(5, 8).map((el, i) => (
            <Card key={i} cuisine={el} />
          ))}
        </div>
      </div>
      <Gallery />
    </>
  );
}
