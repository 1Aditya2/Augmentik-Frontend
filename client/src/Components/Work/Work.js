import React from "react";
import "./Work.scss";
function Work() {
  return (
    <div className="work">
      <div className="top">
        <div className="left">
          <h1>The Work OS that lets you shape workflows, your way</h1>
        </div>
        <div className="right">
          <p>
            Boost your team's alignment, efficiency, and productivity by
            customizing any workflow to fit your needs.
          </p>
          <button>Get Started</button>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="top">
            <img
              src="https://dapulse-res.cloudinary.com/image/fetch/f_auto,q_auto/https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/Masonry/final/Integration.jpg"
              alt=""
            />
          </div>

          <div className="bottom">
            <img
              src="https://dapulse-res.cloudinary.com/image/fetch/f_auto,q_auto/https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/Masonry/final/Pie.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="mid">
          <div className="img">
            <img
              src="https://dapulse-res.cloudinary.com/image/fetch/f_auto,q_auto/https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/Masonry/final/MobileApp.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="right">
          <div className="img">
            <img
              src="https://dapulse-res.cloudinary.com/image/fetch/f_auto,q_auto/https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/Masonry/final/Dash.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
