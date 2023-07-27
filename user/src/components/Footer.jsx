import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content footer-bg">
        <div>
          <img
            src="https://www.bakmigm.com/cfind/source/images/logo-footer.png"
            alt=""
          />
        </div>
        <div>
          <span className="footer-title">Service</span>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Award & Sertification</a>
          <a className="link link-hover">Career</a>
        </div>
        <div>
          <span className="footer-title">Download Application</span>
          <div>
            <div className="flex">
              <img
                className="flex-none px-2"
                src="https://www.bakmigm.com/cfind/source/thumb/images/cover_w135_h40_logo-ps.png"
                alt=""
              />
              <img
                className="flex-none px-2"
                src="https://www.bakmigm.com/cfind/source/thumb/images/cover_w135_h40_logo-as.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <div className="flex">
            <img
              className="flex-none px-2"
              src="https://www.bakmigm.com/cfind/source/thumb/images/cover_w32_h32_ic-facebook.png"
              alt=""
            />
            <img
              className="flex-none px-2"
              src="https://www.bakmigm.com/cfind/source/thumb/images/cover_w32_h32_ic-instagram.png"
              alt=""
            />
            <img
              className="flex-none px-2"
              src="https://www.bakmigm.com/cfind/source/thumb/images/cover_w32_h32_ic-youtube.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <img
            src="https://www.bakmigm.com/cfind/source/thumb/images/cover_w64_h64_tw484_th484_x112_y10_logo-halal-indonesia.png"
            alt=""
          />
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-neutral text-neutral-content font-bold">
        <div>
          <p>
            2023 Bakmi GM. All Rights reserved. Replicate site by{" "}
            <a className="store" href="https://instagram.com/bhagaskuro">
              @bhagaskuro
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
