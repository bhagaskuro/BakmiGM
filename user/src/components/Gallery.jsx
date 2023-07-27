import React from "react";

export default function Gallery() {
  return (
    <>
      <h1 className="text-3xl font-bold px-20 py-10">
        Follow Instagram{" "}
        <a href="#" className="store">
          @bakmigmania
        </a>
      </h1>
      <div className="flex">
        <img
          className="w-full"
          src="https://www.bakmigm.com/cfind/source/thumb/images/menu/cover_w480_h288_img-header.jpg"
          alt="Drink"
        />{" "}
        <img
          className="w-full"
          src="https://www.bakmigm.com/cfind/source/thumb/images/cover_w480_h288_ig-3.jpg"
          alt="Drink"
        />{" "}
        <img
          className="w-full"
          src="https://www.bakmigm.com/cfind/source/thumb/images/cover_w480_h288_643_480x288.jpg"
          alt="Drink"
        />
      </div>
    </>
  );
}
