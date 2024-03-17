import { Link } from "react-router-dom";
import { useItems } from "../../Contexts/ItemsContext";

function NewArrivalItem({ item, translate }) {
  const { choosenItem } = useItems();
  return (
    <Link
      to={`/singleProduct/${item.id}`}
      className={`w-[25%] min-w-[25%] px-3  transition-all
      )}`}
      style={{ transform: `translateX(${translate}%)` }}
      onClick={() => choosenItem(item.id)}
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
          <div className="flex gap-4">
            <p>${item.newPrice.toFixed(2)}</p>
            {item.oldPrice && <p className="line-through">${item.oldPrice}</p>}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NewArrivalItem;
