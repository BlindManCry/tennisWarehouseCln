import { useEffect, useState } from "react";

function SwitchImagesHero() {
  const [activeImage, setActiveImage] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(
    function () {
      if (activeImage > 200) setActiveImage(0);

      const imageInterval = setInterval(() => {
        if (!pause) {
          setActiveImage((img) => img + 100);
        }
      }, 4000);

      return () => clearInterval(imageInterval);
    },
    [activeImage, pause]
  );

  return (
    <>
      <div className="flex mt-7 overflow-hidden">
        {/* FIRST IMAGE  */}
        <div
          className={`relative cursor-pointer w-full min-w-full translate-x-[-${activeImage}%] transition-all duration-300`}
        >
          <img
            src="https://img.tennis-warehouse.com/fpcache/1200/marketing/BOOM24FP3-lg.jpg"
            alt=""
            className="w-full"
          />
          <p className="absolute top-3 left-3 bg-black text-[#fff] px-4 py-7">
            HEAD
          </p>
          <div className="absolute bottom-9 left-9 ">
            <h2 className="text-[4rem] leading-7 font-bold">HEAD Boom</h2>
            <h2 className="text-[4rem] font-bold">2024</h2>
            <p className="text-[1.5rem]">Chased It. Placed It. Aced It.</p>
            <button className="text-[#fff] px-5 py-3 bg-black font-semibold rounded-sm mt-4">
              Shop Now
            </button>
          </div>
        </div>

        {/* SECOND IMAGE  */}
        <div
          className={`relative cursor-pointer w-full min-w-full translate-x-[-${activeImage}%] transition-all duration-300`}
        >
          <img
            src="https://img.tennis-warehouse.com/fpcache/1200/marketing/ADIMARKFP2-lg.jpg"
            alt=""
            className="w-full"
          />
          <div className="absolute left-3 w-[80px] h-[80px] top-[-230px]">
            <img
              src="https://img.tennis-warehouse.com/graphics-resizer/logos/ADIDAS.svg"
              alt=""
              className=" w-[80px] "
            />
          </div>
          <div className="absolute bottom-9 left-9 ">
            <h2 className="text-[1.5rem] leading-7 font-bold text-[#fff]">
              New Markdowns
            </h2>
            <h2 className="text-[4rem] font-bold text-[#fff]">25% Off</h2>
            <p className="text-[1.5rem] text-[#fff]">
              adidas Melbourne Collection
            </p>
            <button className="text-[#fff] px-5 py-3 bg-[#b70510] font-semibold rounded-sm mt-4">
              Shop Now
            </button>
          </div>
        </div>

        {/* THIRD IMAGE  */}
        <div
          className={`relative cursor-pointer w-full min-w-full translate-x-[-${activeImage}%] transition-all duration-300`}
        >
          <img
            src="https://img.tennis-warehouse.com/fpcache/1200/marketing/241RPMFP1-lg.jpg"
            alt=""
            className="w-full"
          />
          <div className="absolute left-3 w-[80px] h-[80px] top-[-230px]">
            <img
              src="https://img.tennis-warehouse.com/graphics-resizer/logos/BABOLAT.svg"
              alt=""
              className=" w-[80px] "
            />
          </div>
          <div className="absolute bottom-9 left-9 ">
            <h2 className="text-[1.5rem] leading-7 font-bold text-[#fff]">
              Babolat String Stale
            </h2>
            <h2 className="text-[4rem] font-bold text-[#fff]">
              Buy 2, Get 1 Free
            </h2>
            <p className="text-[1.5rem] text-[#fff]">RPM String Sets & Reels</p>
            <button className="text-[black] px-5 py-3 bg-[#fff] font-semibold rounded-sm mt-4">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <p
          className={`w-[32%] text-center  py-4 border-x-[1px] border-b-[1px] border-gray-300 ${
            activeImage === 0 ? "border-b-orange-800 border-b-[2px]" : ""
          }  cursor-pointer`}
          onClick={() => setActiveImage(0)}
        >
          Head Boom 2024
        </p>
        <p
          className={`w-[32%] text-center  py-4 border-x-[1px] border-b-[1px] border-gray-300 ${
            activeImage === 100 ? "border-b-orange-800 border-b-[2px]" : ""
          }  cursor-pointer`}
          onClick={() => setActiveImage(100)}
        >
          New Markdowns 25% Off
        </p>
        <p
          className={`w-[32%] text-center  py-4 border-x-[1px] border-b-[1px] border-gray-300 ${
            activeImage === 200 ? "border-b-orange-800 border-b-[2px]" : ""
          }  cursor-pointer`}
          onClick={() => setActiveImage(200)}
        >
          Babolat String Sale Buy 2, Get 1 Free
        </p>
        {pause ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-[4%] h-[55px] object-cover cursor-pointer self-center  border-x-[1px] border-b-[1px] border-gray-300"
            onClick={() => setPause(false)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-[4%] h-[55px] object-cover cursor-pointer self-center  border-x-[1px] border-b-[1px] border-gray-300"
            onClick={() => setPause(true)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        )}
      </div>
    </>
  );
}

export default SwitchImagesHero;
