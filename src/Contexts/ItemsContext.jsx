import { createContext, useContext, useEffect, useState } from "react";
import { focusManager, useQuery } from "react-query";
import { getNewArrivals, getUsers } from "../helpers/data";

const ItemsContext = createContext();

function ItemsProvider({ children }) {
  const [clickedProduct, setClickedProduct] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalEnabled, setModalEnabled] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [balance, setBalance] = useState(0);

  const {
    data: newArrivalsData,
    isError: arrivalsError,
    isLoading: arrivalsLoading,
  } = useQuery({
    queryKey: ["newArrivals"],
    queryFn: getNewArrivals,
  });

  const { data: usersData } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  console.log(usersData);

  function choosenItem(id) {
    const oneProductInfo = newArrivalsData.find((product) => product.id === id);
    setClickedProduct(oneProductInfo);
  }

  useEffect(() => {
    if (modalEnabled) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "visible";
    }
  }, [modalEnabled]);

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
        usersData,
        modalEnabled,
        setModalEnabled,
        activeUser,
        setActiveUser,
        balance,
        setBalance,
        isOpen,
        setIsOpen,
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
