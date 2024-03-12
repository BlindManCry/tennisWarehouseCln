
function NewArrivalItem({ item, translate }) {

import {
  wrap_classnameHeight,
  wrap_classnameWidth,
} from "../../helpers/classname";

function NewArrivalItem({ item, index }) {

  return (
    <div
      className={`flex flex-col justify-end items-left min-w-[25%] border-2 h-[370px] p-2 translate-x-[${
        4 * translate
      }%] transition-all`}
    >
      <img
        src={item.image}
        alt="item"

        className={`w-[${item.imageWidth}px] h-[${item.imageHeight}px] m-auto`}

        className={`${wrap_classnameWidth(index)}
        ${wrap_classnameHeight(index)}

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
