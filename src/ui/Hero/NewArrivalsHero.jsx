import { useEffect } from "react";
import { useItems } from "../../Contexts/ItemsContext";
import NewArrivalItem from "../../components/singleItemComponents/NewArrivalItem";

function NewArrivalsHero() {
  useEffect(function () {});
  const { newArrivalsData, arrivalsError, arrivalsLoading } = useItems();
  console.log(newArrivalsData, arrivalsError, arrivalsLoading);

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-center text-[32px] font-bold">New Arrivals</h1>
      <div className="flex w-[100%] overflow-hidden mx-auto items-center gap-4">
        {newArrivalsData?.map((item, index) => (
          <NewArrivalItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivalsHero;
