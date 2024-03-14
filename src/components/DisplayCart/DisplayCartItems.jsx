function DisplayCartItems({ item }) {
  return (
    <>
      <div className="mt-6 px-9 flex">
        <div className="flex w-[69%] min-w-[55%]">
          <img src={item.image} alt="" className="w-[120px] h-[134px]" />
          <div className="w-[100%] flex flex-col gap-7 ml-9">
            <p className="font-bold">{item.title}</p>
            <p className="text-[0.75rem] text-[#215ad0] cursor-pointer hover:underline">
              Remove
            </p>
          </div>
        </div>

        <div className="ml-5 w-[50%] flex justify-between">
          <div className="flex gap-[90px]">
            <p className="text-[#007A62]">Yes</p>
            <p>{item.quantity}</p>
          </div>
          <p className="mr-[30px]">${item.totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}

export default DisplayCartItems;
