function SwitchImagesHero() {
  return (
    <div className="flex">
      <div className="relative cursor-pointer">
        <img
          src="https://img.tennis-warehouse.com/fpcache/1200/marketing/BOOM24FP3-lg.jpg"
          alt=""
          className="w-full"
        />
        <p className="absolute top-3 left-3 bg-black text-[#fff] px-4 py-7">
          HEAD
        </p>
      </div>
    </div>
  );
}

export default SwitchImagesHero;
