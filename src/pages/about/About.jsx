import React from "react";
import "./about.scss";

import Newsletter from "../../components/newsletter/newsletter";

const About = () => {
  return (
    <div className="about-container container mx-auto mt-10 px-5">
      <div className="bg-transparent section mt-6">
        <div className="text">
          <h1 className="title mb-4 my-2">
            The most modern and efficient way to treat skin.
          </h1>
          <p className="mb-6 my-4 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            nobis possimus quasi maxime quaerat vero.
          </p>
        </div>
        <div className="pic ">
          <img
            src="https://res.cloudinary.com/dnohok50n/image/upload/v1662980669/scamp-group-project/16_zwjwld.jpg"
            alt="pic"
          />
        </div>
      </div>
      <div className="section">
        <div className="pic">
          <img
            src="https://res.cloudinary.com/dnohok50n/image/upload/v1662980703/scamp-group-project/VA-1_yyyitq.png"
            alt=""
          />
        </div>
        <div className="text bg-transparent">
          <h1 className="title mb-2 my-2">
            Forget about masking — now we Soke.
          </h1>
          <p className="mb-6 my-4 text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            sunt, aliquid officia voluptate natus facilis, cum quod ratione quae
            nulla similique animi. Nostrum officiis quidem dolores accusantium
            nisi. Magnam, qui!
          </p>
          <p className="mb-6 my-4 text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            sunt, aliquid officia voluptate natus facilis, cum quod ratione quae
            nulla similique animi.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="text">
          <h2 className="title mb-2 my-2">We go beyond feel good</h2>
          <p className="mb-6 my-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            consequuntur itaque provident quibusdam, dicta in.
          </p>
          <p className="mb-6 my-4 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            maxime nam suscipit autem praesentium nisi!
          </p>
          <p className="mb-6 my-4 text-white">Don’t take our word for it…</p>
          <button className="text-white">See for youself</button>
        </div>
        <div className="pic">
          <img
            src="https://res.cloudinary.com/dnohok50n/image/upload/v1662980645/scamp-group-project/12_h22qt5.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <Newsletter />
      </div>
    </div>
  );
};

export default About;
