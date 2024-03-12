import { useEffect, useState } from "react";
import { useItems } from "../../Contexts/ItemsContext";
import NewArrivalItem from "../../components/singleItemComponents/NewArrivalItem";

function NewArrivalsHero() {
  const [translate, setTranslate] = useState(0);
  function handleTranslateBack() {
    setTranslate((state) => state + 100);
  }

  function handleTranslateForward() {
    setTranslate((state) => state - 100);
  }

  useEffect(function () {});
  const { newArrivalsData, arrivalsError, arrivalsLoading } = useItems();
  console.log(newArrivalsData, arrivalsError, arrivalsLoading);

  return (
    <div className="w-[90%] mx-auto relative">
      <h1 className="text-center text-[32px] font-bold">New Arrivals</h1>

      <svg
        onClick={handleTranslateBack}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 absolute top-[50%] left-[-50px] hover:cursor-pointer hover:w-12 hover:h-12 transition-all"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
      <svg
        onClick={handleTranslateForward}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 absolute top-[50%] right-[-50px] hover:cursor-pointer hover:w-12 hover:h-12 transition-all"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
      <div
        className={`flex w-[100%] overflow-hidden mx-auto items-center gap-[0px]`}
      >
        {newArrivalsData?.map((item) => (
          <NewArrivalItem item={item} translate={translate} />

      <div className="flex w-[100%] overflow-hidden mx-auto items-center gap-4">
        {newArrivalsData?.map((item, index) => (
          <NewArrivalItem key={index} item={item} index={index} />

        ))}
      </div>
      11
    </div>
  );
}

export default NewArrivalsHero;
