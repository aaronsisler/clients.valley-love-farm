import React from "react";

import { farmOptionPorkImage, farmOptionPoultryImage } from "../content/images";

const poultryOption = {
  key: "poultry-option",
  image: farmOptionPoultryImage,
  linkHref: "poultry",
  title: "Chicken, Turkey, & Chicken Eggs",
  text: (
    <React.Fragment>
      Our chickens and turkeys are pasture-raised, which means they are allowed
      to roam the fields, eating the insects and plants they would naturally
      eat. Happy animals means meat and eggs with higher Omega-3s and Vitamins
      A, B<sub>6</sub>, B<sub>12</sub>, D, and E.
    </React.Fragment>
  ),
};

const livestockOption = {
  key: "livestock-option",
  image: farmOptionPorkImage,
  linkHref: "livestock",
  title: " Pork, Sausage, & Beef",
  text: (
    <React.Fragment>
      Our pigs and cattle are raised roaming free in the pastures of native
      grasses and plant life. Pork and beef from our farm (compared to
      factory-farm) contain absolutely no added antibiotics or hormones and
      higher​ levels of Omega-3s and Vitamin E.
    </React.Fragment>
  ),
};

const farmOptions = [poultryOption, livestockOption];

export { farmOptions };
