function SwitchImagesHero() {
  return (
    <>
      <div className="flex mt-7">
        <div className="relative cursor-pointer">
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
      </div>

      <div></div>
    </>
  );
}

export default SwitchImagesHero;
