import { useEffect, useState } from "react";

function SingleProduct() {
  const [sizes, setSizes] = useState([]);

  useEffect(function () {
    async function getSizes() {
      const res = await fetch("http://localhost:5000/sizes");
      const data = await res.json();
      console.log(data);
      setSizes(data);
    }
    getSizes();
  }, []);
  return (
    <div className="flex mt-8 ml-7 gap-[60px]">
      <div className="w-[60%]">
        <img
          src="https://img.tennis-warehouse.com/watermark/rs.php?path=AMR9SAB-1.jpg&nw=731"
          alt=""
          className="w-[570px] h-[500px] mt-[150px]"
        />
      </div>
      <div className="w-[40%] border-[1px] border-gray-300 p-[30px] flex flex-col gap-4">
        <h2 className="text-[2rem] font-semibold">
          ON The Roger Clubhouse Pro Undyed/Indigo Men's Shoe
        </h2>
        <p className="mt-9 text-[1.25rem] font-semibold">$159.99</p>
        <p className="mt-7 text-[0.75rem] font-semibold">Shoe Size:</p>
        <div className="mt-1 grid grid-cols-4 gap-x-2 gap-y-2">
          {sizes.map((item, index) => {
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
      </div>
    </div>
  );
}

export default SingleProduct;
