import { createContext, useContext } from "react";
import { useQuery } from "react-query";
import { getNewArrivals } from "../helpers/data";

const ItemsContext = createContext();
function ItemsProvider({ children }) {
  const {
    data: newArrivalsData,
    isError: arrivalsError,
    isLoading: arrivalsLoading,
  } = useQuery({
    queryKey: ["newArrivals"],
    queryFn: getNewArrivals,
  });

  return (
    <ItemsContext.Provider
      value={{ newArrivalsData, arrivalsError, arrivalsLoading }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

function useItems() {
  const context = useContext(ItemsContext);
  return context;
}

export { ItemsContext, ItemsProvider, useItems };
