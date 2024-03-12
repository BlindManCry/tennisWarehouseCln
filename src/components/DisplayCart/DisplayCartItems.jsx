function DisplayCartItems() {
  return (
    <>
      <div className="mt-6 px-9 flex">
        <div className="flex w-[69%] min-w-[55%]">
          <img
            src="https://img.tennis-warehouse.com/watermark/rs.php?path=TWHC-BL-1.jpg&nw=128 "
            alt=""
            className="w-[100px] h-[134px]"
          />
          <div className="w-[100%] flex flex-col gap-7 ml-9">
            <p className="font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-[0.75rem] text-[#215ad0] cursor-pointer hover:underline">
              Remove
            </p>
          </div>
        </div>

        <div className="ml-5 w-[50%] flex justify-between">
          <div className="flex gap-[90px]">
            <p className="text-[#007A62]">Yes</p>
            <p>1</p>
          </div>
          <p className="mr-[30px]">$25.00</p>
        </div>
      </div>
    </>
  );
}

export default DisplayCartItems;
