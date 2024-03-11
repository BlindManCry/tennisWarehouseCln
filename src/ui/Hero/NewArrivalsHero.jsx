import { useEffect } from "react";
import { useItems } from "../../Contexts/ItemsContext";
import NewArrivalItem from "../../components/singleItemComponents/NewArrivalItem";

function NewArrivalsHero() {
  useEffect(function () {});
  const { newArrivalsData, arrivalsError, arrivalsLoading } = useItems();
  console.log(newArrivalsData, arrivalsError, arrivalsLoading);

  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-center text-[32px] font-bold">New Arrivals</h1>
      <div className="flex w-[100%] overflow-hidden mx-auto items-center gap-[0px] ">
        {newArrivalsData?.map((item) => (
          <NewArrivalItem item={item} />
        ))}
      </div>
      11
    </div>
  );
}

export default NewArrivalsHero;
