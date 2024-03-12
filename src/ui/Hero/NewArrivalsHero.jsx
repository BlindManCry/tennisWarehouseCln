import { useState } from "react";
import NewArrivalItem from "../../components/singleItemComponents/NewArrivalItem";
import { useItems } from "../../Contexts/ItemsContext";

function NewArrivalsHero() {
  const [translate, setTranslate] = useState(0);

  const { newArrivalsData } = useItems();
  console.log(newArrivalsData);
  const arrLength = newArrivalsData?.length;
  function handleTranslateBack() {
    setTranslate((state) =>
      state === 0
        ? 400 *
          -Math.floor(arrLength % 4 === 0 ? arrLength / 4 - 1 : arrLength / 4)
        : state + 400
    );
  }

  function handleTranslateForward() {
    setTranslate((state) =>
      state ===
      -Math.floor(arrLength % 4 === 0 ? arrLength / 4 - 1 : arrLength / 4) * 400
        ? 0
        : state - 400
    );
  }

  return (
    <div>
      <h2 className="text-center text-[2rem] font-semibold">New Arrivals</h2>
      <div>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-11 h-11 absolute top-[50%] left-[-50px] "
            onClick={handleTranslateBack}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-11 h-11  absolute top-[50%] right-[-50px] "
            onClick={handleTranslateForward}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>

          <div className="flex overflow-hidden justify-between mt-8">
            {newArrivalsData?.map((item, index) => {
              return (
                <NewArrivalItem
                  key={item.id}
                  item={item}
                  translate={translate}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivalsHero;
