function NewArrivalItem({ item, translate }) {
  return (
    <div
      className={`w-[25%] min-w-[25%] px-3  transition-all
      )}`}
      style={{ transform: `translateX(${translate}%)` }}
    >
      <div className="border-[1px] border-gray-300 hover:border-black cursor-pointer p-5">
        <img
          src={item.image}
          alt=""
          className="ml-[50%] transform translate-x-[-50%] h-[210px]"
        />
        <div className="flex flex-col justify-between gap-2 mt-3 h-[120px]">
          <p className="text-cyan-700 font-semibold">{item.state}</p>
          <p className="max-w-full font-bold">{item.title}</p>
          <p>${item.newPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default NewArrivalItem;
