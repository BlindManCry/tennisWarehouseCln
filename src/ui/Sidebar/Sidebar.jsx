import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategoty] = useState("");

  useEffect(function () {
    async function fetchCategories() {
      const res = await fetch("http://localhost:3000/categories");
      const data = await res.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col items-start mt-7">
      <div className="flex flex-col gap-4">
        <button className="bg-red-700 text-[#fff] px-[2rem] py-[0.7rem] rounded-sm  border-[1px] border-red-800">
          Specials
        </button>
        <button className="px-[2rem] py-[0.7rem] rounded-sm border-[1px] border-black">
          Shop By Brand
        </button>
      </div>
      <div className="flex flex-col mt-6 gap-5 mb-4">
        {categories.map((category, index) => {
          return (
            <div key={category.id}>
              <p
                className="font-bold  cursor-pointer hover:underline"
                onClick={() =>
                  setActiveCategoty((cat) =>
                    cat === category.name ? "" : category.name
                  )
                }
              >
                {category.name}
              </p>
              {activeCategory === category.name && (
                <div className="flex flex-col pl-4">
                  {category.subcategories.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        className="text-[12px] text-gray-500 cursor-pointer hover:text-[black] hover:underline"
                        to={`${item}RacketsOverview`}
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
