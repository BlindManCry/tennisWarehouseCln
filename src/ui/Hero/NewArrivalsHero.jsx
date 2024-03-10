import { useEffect } from "react";
import { useItems } from "../../Contexts/ItemsContext";

function NewArrivalsHero() {
  useEffect(function () {});
  const { newArrivalsData, arrivalsError, arrivalsLoading } = useItems();
  console.log(newArrivalsData, arrivalsError, arrivalsLoading);

  return (
    <div>
      <h1>New Arrivals</h1>
      <div></div>
    </div>
  );
}

export default NewArrivalsHero;
