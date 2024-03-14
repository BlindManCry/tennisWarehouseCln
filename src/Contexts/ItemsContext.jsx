import { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";
import { getNewArrivals } from "../helpers/data";

const ItemsContext = createContext();

function ItemsProvider({ children }) {
  const [clickedProduct, setClickedProduct] = useState();
  const [cartItems, setCartItems] = useState([]);

  const {
    data: newArrivalsData,
    isError: arrivalsError,
    isLoading: arrivalsLoading,
  } = useQuery({
    queryKey: ["newArrivals"],
    queryFn: getNewArrivals,
  });

  function choosenItem(id) {
    const oneProductInfo = newArrivalsData.find((product) => product.id === id);
    setClickedProduct(oneProductInfo);
  }

  return (
    <ItemsContext.Provider
      value={{
        newArrivalsData,
        arrivalsError,
        arrivalsLoading,
        choosenItem,
        clickedProduct,
        cartItems,
        setCartItems,
      }}
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
