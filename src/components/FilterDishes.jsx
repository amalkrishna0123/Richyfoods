import React, { useContext, useState, useEffect } from "react";
import Pagination from "./Pagination";
import PopUp from "./PopUp";
import { AllMenuContext } from "./AllMenuContext";

const FilterDishes = ({  allmenu }) => {
  const [menuCat, setMenuCat] = useState([]);
  let [singleDish, setSingleDish] = useState([]);
  let [allMenu, setAllmenu] = useState(allmenu);
  let [filterDishes, setFilterDishes] = useState([]);
  let [activeDish, setActiveDish] = useState("Beef");
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage, setItemsPerPage] = useState(4);
  let [showPopUp, setShowPopUp] = useState(false);
  let [dishName, setDishName] = useState("");
  const allMenus = useContext(AllMenuContext);

  useEffect(() => {
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

    fetchCatagory();
    fetchSingleDish();
  }, []);

  let endingIndex = currentPage * itemsPerPage;

  let startingIndex = endingIndex - itemsPerPage;

  let maxItem = 4;
  let SlicePage = filterDishes.slice(startingIndex, endingIndex);

  const showSingleDishItem = singleDish.map((item, index) => {
    if (index < maxItem) {
      return (
        <div>
          <li className="xs:w-[190px] xxs:w-[300px] xxs:h-[300px] sm:mx-3 sm:w-[200px] relative sm:h-[250px] rounded-[5%] bg-slate-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <img
              src={item.strMealThumb}
              alt=""
              className=" absolute object-cover h-full w-full rounded-[5%]"
            />
            <div className=" absolute text-white bottom-2 mx-3">
              <h3 className=" font-semibold">{item.strMeal}</h3>
              <p className=" text-[12px] text-gray-300">{item.strCategory}</p>
            </div>
          </li>
        </div>
      );
    }
  });

  let showPopUpHandler = (dishName) => {
    setShowPopUp(true);
    console.log("Dish Name", dishName);
  };

  let closebtnHandler = () => {
    setShowPopUp(false);
  };

  const ShowFilteredData = (category) => {
    setSingleDish([]);
    setActiveDish(category);
    let filterDish = allMenus
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((item) => {
        return (
          <a href="javaScript:;" onClick={() => showPopUpHandler(item.strMeal)}>
            <li className="xs:w-[190px] xxs:w-[300px] xxs:h-[300px] sm:mx-3 w-[200px] relative h-[250px] rounded-[5%] bg-slate-400  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <img
                src={item.strMealThumb}
                alt=""
                className=" absolute object-cover h-full w-full rounded-[5%]"
              />
              <div className=" absolute text-white bottom-2 mx-3">
                <h3 className=" font-semibold">{item.strMeal}</h3>
                <p className=" text-[12px] text-gray-300">{item.strCategory}</p>
              </div>
            </li>
          </a>
        );
      });
    setFilterDishes(filterDish);
  };
  console.log("Filtered Dishes are", filterDishes);

  return (
    <>
      {showPopUp && (
        <PopUp closebtnHandler={closebtnHandler} filterDishes={filterDishes} />
      )}
      <div className=" h-auto w-full items-center justify-center justify-items-center flex mx-auto xl:justify-center xl:justify-items-center xl:items-center xl:max-w-[1024px]">
        <ul className=" my-5 flex flex-wrap gap-3  justify-center justify-items-center items-center text-center mx-auto">
          {menuCat.map((cate) => (
            <li
              key={cate.strCategory}
              onClick={() => {
                ShowFilteredData(cate.strCategory);
              }}
              className={` font-semibold text-slate-800 bg-yellow-400 px-3 text-sm py-2 cursor-pointer rounded-xl hover:bg-slate-300 transition-all duration-300 shadow-xl lg:text-lg xl:text-xl xl:max-w-[1024px] ${
                cate.strCategory === activeDish ? "active" : ""
              }`}
            >
              {cate.strCategory}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex xl:max-w-[1200px] w-full justify-center justify-items-center items-center mx-auto">
        <ul className=" flex flex-wrap mx-auto items-center justify-center gap-7">
          {showSingleDishItem}
          {showSingleDishItem.length !== 0 || filterDishes.length !== 0 ? (
            SlicePage
          ) : (
            <div className="alert mx-3 py-2 px-4 rounded-xl items-center justify-center justify-items-center h-full">
              <h2 className=" text-[25px] text-center font-medium text-red-700">
                Sorry, No Items Found
              </h2>
              <h4 className=" text-center font-semibold">
                Please try another dishes
              </h4>
            </div>
          )}
        </ul>
      </div>

      <Pagination
        filterdish={filterDishes}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default FilterDishes;
