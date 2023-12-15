import React, { useContext, useState } from "react";
import Pagination from "./Pagination";
import PopUp from "./PopUp";
import AllMenuContext from "./DataApi";

const FilterDishes = ({ catagories, allmenu, singledish, setsingledish }) => {
  let [allMenu, setAllmenu] = useState(allmenu);
  let [filterDishes, setFilterDishes] = useState([]);
  let [activeDish, setActiveDish] = useState("Beef");
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage, setItemsPerPage] = useState(4);
  let [showPopUp, setShowPopUp] = useState(false);
  let [dishName, setDishName] = useState("");
  const allMenus = useContext(AllMenuContext);

  let endingIndex = currentPage * itemsPerPage;

  let startingIndex = endingIndex - itemsPerPage;

  let maxItem = 4;
  let SlicePage = filterDishes.slice(startingIndex, endingIndex);

  const showSingleDishItem = singledish.map((item, index) => {
    if (index < maxItem) {
      return (
        <div>
          <li className="mx-3 w-[200px] relative h-[250px] rounded-[5%] bg-slate-400">
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
    setsingledish([]);
    setActiveDish(category);
    let filterDish = allMenus
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((item) => {
        return (
          <a href="javaScript:;" onClick={() => showPopUpHandler(item.strMeal)}>
            <li className="mx-3 w-[200px] relative h-[250px] rounded-[5%] bg-slate-400">
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
      <div className=" h-auto w-full">
        <ul className=" my-5 flex flex-wrap gap-5 mx-6">
          {catagories.map((cate) => (
            <li
              key={cate.strCategory}
              onClick={() => {
                ShowFilteredData(cate.strCategory);
              }}
              className={` font-semibold bg-yellow-500 px-2 py-2 cursor-pointer rounded-xl hover:bg-slate-300 transition-all duration-300 shadow-xl ${
                cate.strCategory === activeDish ? "active" : ""
              }`}
            >
              {cate.strCategory}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex max-w-[1200px] w-full ">
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
