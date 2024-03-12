function NewArrivalItem({ item }) {
  return (
    <div className="w-[25%] min-w-[25%] px-3">
      <div className="border-[1px] border-gray-300 hover:border-black cursor-pointer p-5">
        <img src={item.image} alt="" className=" ml-[50%] translate-x-[-50%]" />
        <div className="flex flex-col gap-2 mt-3">
          <p>new</p>
          <p className="max-w-full">
            Lacoste Men's Novak Spring Court Polo ddnwiodmiwmd
          </p>
          <p>$155.00</p>
        </div>
      </div>
    </div>
  );
}

export default NewArrivalItem;
