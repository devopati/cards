import React, { useState } from "react";
import Navigation from "../components/Navigation";
import "./homepage.css";
import Card from "../components/Card";
import { data } from "../data/data";

const HomePage = () => {
  return (
    <div className="home_container">
      <Navigation />
      <div className="cards">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Card
                title={item?.title}
                desc1={item?.desc1}
                desc2={item?.desc2}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
