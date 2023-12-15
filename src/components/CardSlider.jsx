import React, { useContext, useState } from "react";
import PopUp from "./PopUp";
import { AllMenuContext } from "./DataApi";



function CardSlider({ menu }) {
  let [showPopUp, setShowPopUp] = useState(false);
  let [currentDish, setcurrentDish] = useState("");
  const allMenus = useContext(AllMenuContext)
  let maxItem = 8;

  let showPopUpHandler = (dishName) => {
    setShowPopUp(true);
    setcurrentDish(dishName);
    // console.log("Dish Name",dishName)
  };
  let closebtnHandler = () => {
    setShowPopUp(false);
  };

  
  const filteredMeals = allMenus
    .filter((meal, index) => index < maxItem && meal && meal.strMeal)
    .map((meal, index) => (
      <a
        href="javaScript:;"
        key={index}
        onClick={() => showPopUpHandler(meal.strMeal)}
      >
        <li>
          <div className="mx-3 w-[200px] relative h-[250px] rounded-[5%] bg-slate-400">
            <img
              src={meal.strMealThumb}
              className="absolute object-cover h-full w-full rounded-[5%]"
              alt=""
            />
            <div className="absolute text-white bottom-2 mx-3">
              <h3 className="font-semibold">{meal.strMeal}</h3>
              <p className="text-[12px] text-gray-300">{meal.strCategory}</p>
            </div>
          </div>
        </li>
      </a>
    ));
    console.log("Original Menu", menu);

  console.log("This is a filtered meals", filteredMeals);
  return (
    <>
      {showPopUp && (
        <PopUp
          closebtnHandler={closebtnHandler}
          currentDish={currentDish}
        />
      )}
      <div className="flex max-w-[1200px] w-full">
        <ul className="flex flex-wrap mx-auto items-center justify-center gap-7">
          {filteredMeals}
        </ul>
      </div>
    </>
  );
}

export default CardSlider;
