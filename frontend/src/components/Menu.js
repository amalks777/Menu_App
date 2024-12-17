import React, { useState, useEffect } from "react";
import axios from "axios";
import background from "../images/bg.jpg";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedMenuId, setSelectedMenuId] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/menus");
        setMenus(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const fetchItems = async (menuId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/menu/${menuId}/items`
      );
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  fetchItems();

  const handleMenu = (menuId) => {
    setSelectedMenuId(menuId);
    fetchItems(menuId);
  };

  return (
    <div className="p-8 bg-gray-950 text-white min-h-screen">
      <section className="relative h-52 w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 blur-sm"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 text-center">MENU</h1>
            <p className="mx-auto max-w-2xl text-pretty text-lg font-medium font-serif text-white sm:text-xl/8 sm:py-4 lg:py-6">
              Please take a look at our menu featuring food, drinks and
              brunch.if you'd like to place an order, use the "order online"
              button located below menu
            </p>
          </div>
        </div>
      </section>

      <div class="container mx-auto py-4 flex justify-center space-x-4 mt-10">
        {menus.map((menu) => (
          <button
            key={menu.id}
            className={`px-4 py-2 rounded-md ${
              selectedMenuId === menu.id
                ? "bg-blue-500 text-white"
                : "bg-transparent text-white border border-blue-500"
            } font-bold`}
            onClick={() => handleMenu(menu.id)}
          >
            {menu.menu_name}
          </button>
        ))}
      </div>

      <div className="container max-w-screen-lg mx-auto border px-4 lg:px-8 lg:mt-10 mt-10">
        <div className="flex justify-center">
          {menus.find((menu) => menu.id === selectedMenuId)?.description && (
            <h1 className="text-center font-bold text-3xl uppercase pt-6">
              {menus.find((menu) => menu.id === selectedMenuId).description ||
                ""}
            </h1>
          )}
        </div>

        <div className="container max-w-screen-lg mx-auto py-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:px-8 lg:mt-10 mt-10">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                class="flex flex-wrap bg-transparent text-white p-4 rounded-md"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {item.item_name}........................${item.price}
                </h2>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))
          ) : (
            <p className="flex justify-start text-md font-small text-gray-500 sm:text-xl/8">
              Select a menu to view the items
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
