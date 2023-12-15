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
import Loader from "./Loader";

export const AllMenuContext = React.createContext();

const DataApi = () => {
  const [menu, setMenu] = useState([]);
  const [menuCat, setMenuCat] = useState([]);
  let [loading, setLoading] = useState(false);
  let [singleDish, setSingleDish] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=c"
      );
      const data = await response.json();
      setMenu(data.meals);
      // console.log(menu)
      setLoading(false);
    };

    const fetchCatagory = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const catagorydata = await response.json();
      // console.log(catagorydata.categories)
      setMenuCat(catagorydata.categories);
    };

    const fetchSingleDish = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
      );
      const singledishdata = await response.json();
      setSingleDish(singledishdata.meals);
    };
    // console.log(menuCat)
    // console.log("Single Dish",singleDish)

    fetchData();
    fetchCatagory();
    fetchSingleDish();
  }, []);

  return (
    <>
      <div>
        <AllMenuContext.Provider value={menu}>
          <Header />
          <AutomatedCarousel />
          <HeroBanner />
          {!loading ? <CardSlider/> : <Loader />}
          {!loading ? (
            <FilterDishes
              catagories={menuCat}
              singledish={singleDish}
              setsingledish={setSingleDish}
            />
          ) : null}
          {/* <CoockingQuote/> */}
          {/* <OrganicFood/>
        <DessertSlider/>
        <Footer/> */}
        </AllMenuContext.Provider>
      </div>
    </>
  );
};

export default DataApi;
