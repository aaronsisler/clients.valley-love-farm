import React from "react";

const poultryOption = {
  key: "poultry-option",
  image: {
    source: "images/farm/farm1.jpg",
    altText: "Poultry"
  },
  linkPath: "poultry",
  title: "Chicken & Eggs",
  text: (
    <React.Fragment>
      Our chickens and pigs are pasture-raised, which means they are allowed to
      roam the fields, eating the insects and plants they would naturally eat.
      Happy animals means meat and eggs with higher Omega-3s and Vitamins A, B
      <sub>6</sub>, B<sub>12</sub>, D, and E.
    </React.Fragment>
  )
};

const porkOption = {
  key: "pork-option",
  image: {
    source: "images/farm/farm2.jpg",
    altText: "Pork"
  },
  linkPath: "pork",
  title: " Pork & Sausage",
  text: (
    <React.Fragment>
      Our pigs are raised roaming free in the pastures of native grasses and
      plant life. Pork from our farm (compared to factory-farm) contain
      absolutely no added antibiotics or hormones and higher​ levels of Omega-3s
      and Vitamin E.
    </React.Fragment>
  )
};

const farmOptions = [poultryOption, porkOption];

export default farmOptions;
