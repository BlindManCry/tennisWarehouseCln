import {
  wrap_classnameHeight,
  wrap_classnameWidth,
} from "../../helpers/classname";

function NewArrivalItem({ item, index }) {
  return (
    <div className="flex flex-col justify-center items-left min-w-[25%] border-2 h-[350px]">
      <img
        src={item.image}
        alt="item"
        className={`${wrap_classnameWidth(index)}
        ${wrap_classnameHeight(index)}
        mx-[50%] translate-x-[-50%]`}
      />
      <p>New</p>
      <p>{item.title}</p>
      <div className="flex">
        <p>{item.newPrice}</p>
        {item.oldPrice && <p>{item.oldPrice}</p>}
      </div>
    </div>
  );
}

export default NewArrivalItem;
