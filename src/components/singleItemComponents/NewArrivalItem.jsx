function NewArrivalItem({ item }) {
  return (
    <div className="flex flex-col justify-end items-left min-w-[25%] border-2 h-[370px] p-2">
      <img
        src={item.image}
        alt="item"
        className={`w-[${item.imageWidth}px] h-[${item.imageHeight}px] m-auto`}
      />
      <div className="">
        <p>New</p>
        <p>{item.title}</p>
        <div className="flex gap-3">
          <p className="font-bold">${item.newPrice}</p>
          {item.oldPrice && <p className="line-through">${item.oldPrice}</p>}
        </div>
      </div>
    </div>
  );
}

export default NewArrivalItem;
