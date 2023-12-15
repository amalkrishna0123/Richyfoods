import React, { useContext } from "react";
import { AllMenuContext } from "./DataApi";

const PopUp = ({ closebtnHandler, currentDish, allMenu }) => {
  const allMenus = useContext(AllMenuContext);

  // console.log("Current Dish:", currentDish);
  // console.log("All Menus are", allMenu);
  let dishDetails = allMenus.filter((item) => {
    const isMatch =
      item.strMeal &&
      currentDish &&
      item.strMeal.toLowerCase().includes(currentDish.toLowerCase().trim());

    console.log(
      "Filtering:",
      item.strMeal,
      "Current Dish:",
      currentDish,
      "Is Match:",
      isMatch
    );

    return isMatch;
  });
  // .map((item) =>
  // <div>
  //   <h2 key={item.id}>{item.strMeal}</h2>
  //   <img src={item.strMealThumb} alt="" />
  // </div>

  // );

  console.log("Dish details are:", dishDetails);

  return (
    <>
      <div className=" fixed left-0 top-0 right-0 bottom-0 backdrop-blur-md flex flex-col items-center justify-center justify-items-center mx-auto z-[500]">
        <h2
          onClick={closebtnHandler}
          className=" absolute z-[100] top-3 right-5 text-blue-600 hover:text-red-600 cursor-pointer transition-all duration-300 font-semibold"
        >
          Close
        </h2>
        {/* Inner div */}
        {dishDetails.map((item) => (
          <div className="popup-content w-[80%] h-[600px] rounded-md flex flex-col items-center justify-items-center justify-center relative">
            {/* Image div */}
            <div className=" absolute top-2 rounded-lg py-5 h-[230px] w-[85%]">
              <img
                src={item.strMealThumb}
                className=" w-full h-full rounded-lg object-cover"
                alt=""
              />
            </div>
            {/* Title  and Paragraph div */}
            <div className=" mt-[-100px] text-center text-[25px] text-slate-500 font-semibold">
              <h1>{item.strMeal}</h1>
              <h6 className=" text-[12px] font-medium text-slate-400">
                Instructions of{" "}
                <span className=" font-semibold text-red-800">
                  {item.strMeal}
                </span>
              </h6>
            </div>
            {/* Incredients div */}
            <div className=" absolute bottom-[135px] px-4">
              <p className=" text-[12px] font-normal text-slate-800">
                "{item.strInstructions}"
              </p>
            </div>
            {/* Bottom div */}
            <div className=" absolute bottom-10 text-sm flex gap-5">
              <button className=" outline-none border-none bg-blue-500 px-2 py-1 rounded-md shadow-sm cursor-pointer hover:bg-slate-500 text-slate-200 transition-all duration-300">
                Checkout
              </button>
              <button className=" outline-none border-none bg-orange-500 px-2 py-1 rounded-md shadow-sm cursor-pointer hover:bg-slate-500 text-slate-200 transition-all duration-300">
                AddToCart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopUp;
