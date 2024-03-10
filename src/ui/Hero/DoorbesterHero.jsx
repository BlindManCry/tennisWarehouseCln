function DoorbesterHero() {
  return (
    <div className="mt-[30px] mb-[200px]">
      <div className="bg-[#b70510] h-[300px]">
        <div className="pt-[20px]">
          <h2 className="text-center text-[40px] text-[#fff] font-extrabold">
            Doorbuster Deal
          </h2>
          <p className="text-center text-[#fff]">Head Speed Team L</p>
        </div>

        <div className="bg-white w-[85%] m-auto  mt-[40px] shadow-lg rounded-sm z-10 flex items-center pl-[100px] py-11">
          <img
            src="https://img.tennis-warehouse.com/watermark/rs.php?path=SPDTL-thumb.jpg&nw=92"
            alt=""
            className=""
          />
          <div className="translate-x-[100%] flex items-center flex-col gap-2">
            <h1 className="text-[48px] text-[#b70510] font-bold">ONLY $79</h1>
            <p>Head Speed Team L Racquet</p>
            <p>
              <span className="font-bold">$79.00</span>
              <span className="line-through ml-2">$229.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoorbesterHero;
