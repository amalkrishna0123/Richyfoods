import React, { useState, useEffect } from "react";
import Loader from "./Loader"

export const AllMenuContext = React.createContext();

export const AllMenus = (props) => {
  const [menu, setMenu] = useState([]);
  let [loading, setLoading] = useState(false);

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

    fetchData();
  }, []);

  return (
    <>
      <AllMenuContext.Provider value={menu}>
        {!loading ? props.children : <Loader />}
      </AllMenuContext.Provider>
    </>
  );
};


