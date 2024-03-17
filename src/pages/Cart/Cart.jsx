import { useEffect, useState } from "react";
import { useItems } from "../../Contexts/ItemsContext";
import DisplayCartItems from "../../components/DisplayCart/DisplayCartItems";
import Modal from "../../ui/Modal";

function Cart() {
  const [allTotalPrice, setAllTotalPrice] = useState(0);

  const {
    cartItems,
    setCartItems,
    activeUser,
    setIsOpen,
    balance,
    setBalance,
  } = useItems();
  console.log(balance, allTotalPrice);

  function handleCheckout() {
    if (activeUser === false) {
      setIsOpen(true);
    } else {
      if (balance >= allTotalPrice) {
        setBalance((balance) => balance - allTotalPrice);
        setCartItems([]);
      } else {
        alert("Balance is not enough!");
      }
    }
  }

  useEffect(
    function () {
      let total = 0;
      for (let i = 0; i < cartItems.length; i++) {
        total = total + cartItems[i].totalPrice;
      }
      setAllTotalPrice(total);
    },
    [cartItems]
  );

  return (
    <div className="ml-[150px] mt-[40px] mr-[100px]">
      <h2 className="text-[1.5rem] font-semibold">Your Cart</h2>

      <div className="flex justify-between bg-gray-100 mt-9 p-6 items-center">
        <div className="flex gap-5 ">
          <p>{cartItems.length ? cartItems.length : 0} Item(s)</p>
          <p className="font-bold">
            Estimated Total: ${allTotalPrice.toFixed(2)}
          </p>
        </div>

        <div>
          {cartItems.length === 0 ? (
            <button
              className="bg-gray-200 text-gray-600 font-semibold py-2 px-[140px]"
              disabled
            >
              Checkout
            </button>
          ) : (
            <button
              onClick={() => handleCheckout()}
              className="bg-blue-200 text-blue-600 font-semibold py-2 px-[140px]"
            >
              Checkout
            </button>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <p className="font-bold ml-[130px] text-[0.75rem]">ITEM</p>
        <div className="flex gap-[130px]">
          <div className="flex gap-11">
            <p className="font-bold text-[0.75rem]">IN STOCK</p>
            <p className="font-bold text-[0.75rem]">QUANTITY</p>
          </div>
          <p className="mr-[70px] font-bold text-[0.75rem]">PRICE</p>
        </div>
      </div>

      {cartItems?.map((item) => {
        return <DisplayCartItems item={item} />;
      })}
    </div>
  );
}

export default Cart;
