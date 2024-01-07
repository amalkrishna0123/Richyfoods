import React, { useEffect, useState } from "react";
import Header from "./Header";
import AutomatedCarousel from "./AutomatedCarousel";
import HeroBanner from "./HeroBanner";
import CardSlider from "./CardSlider";
import CoockingQuote from "./CoockingQuote";
import OrganicFood from "./OrganicFood";
import DessertSlider from "./DessertSlider";
import Footer from "./Footer";
import FilterDishes from "./FilterDishes";
import { AllMenus } from "./AllMenuContext";

const DataApi = () => {
  return (
    <>
      <div>
        <Header />
        <AutomatedCarousel />
        <HeroBanner />
        <AllMenus>
          <CardSlider />
          <FilterDishes />
          {/* <OrganicFood />
          <CoockingQuote /> */}
          {/* <DessertSlider /> */}
          <Footer />
        </AllMenus>
      </div>
    </>
  );
};

export default DataApi;
