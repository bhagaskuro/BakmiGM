import React from "react";

export default function Carousel() {
  return (
    <div className="carousel w-full z-1">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://www.bakmigm.com/cfind/source/thumb/images/banner/cover_w1440_h500_tw2964_th1028_x122_y114_1440x500-3.png"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://www.bakmigm.com/cfind/source/thumb/images/banner/cover_w1440_h500_tw2983_th1036_x17_y16_1440x500-4.png"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://www.bakmigm.com/cfind/source/thumb/images/banner/cover_w1440_h500_tw2996_th1039_x14_y14_member-day_1440x500.png"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
