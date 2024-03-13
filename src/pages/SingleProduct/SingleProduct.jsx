import { useEffect, useState } from "react";
import { useItems } from "../../Contexts/ItemsContext";

function SingleProduct() {
  const [sizes, setSizes] = useState([]);

  const { clickedProduct } = useItems();
  console.log(clickedProduct);

  useEffect(function () {
    async function getSizes() {
      const res = await fetch("http://localhost:5000/sizes");
      const data = await res.json();
      setSizes(data);
    }
    getSizes();
  }, []);
  return (
    <div className="flex mt-8 ml-7 gap-[60px]">
      <div className="w-[60%]">
        <img
          src={clickedProduct?.image}
          alt=""
          className="w-[540px] h-[500px] mt-[150px]"
        />
      </div>
      <div className="w-[40%] border-[1px] border-gray-300 p-[30px] flex flex-col gap-4">
        <h2 className="text-[2rem] font-semibold">{clickedProduct?.title}</h2>
        <p className="mt-9 text-[1.25rem] font-semibold">
          ${clickedProduct?.newPrice.toFixed(2)}
        </p>
        <p className="mt-7 text-[0.75rem] font-semibold">Shoe Size:</p>
        <div className="mt-1 grid grid-cols-4 gap-x-2 gap-y-2">
          {sizes?.map((item, index) => {
            return (
              <p
                key={index}
                className="border-[1px] border-gray-400 px-5 py-3 text-center cursor-pointer"
              >
                {item.size}
              </p>
            );
          })}
        </div>
        <p className="mt-7 text-[0.75rem] font-semibold"> Quantity:</p>
        <div className="mt-1 flex justify-between items-center">
          <p className="border-[1px] border-gray-600 px-5 py-2 text-center cursor-pointer">
            -
          </p>
          <p className="w-[75%] border-y-[1px] border-gray-600 text-center px-5 py-2">
            1
          </p>
          <p className="border-[1px] border-gray-600 px-5 py-2 text-center cursor-pointer">
            +
          </p>
        </div>
        <div className="mt-7">
          <button className="w-full px-4 py-2 bg-gray-300 text-gray-400 font-semibold">
            Add To Cart
          </button>
          {/* <button className="w-full px-4 py-2 bg-cyan-300 text-cyan-600 font-semibold">
            Add To Cart
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
