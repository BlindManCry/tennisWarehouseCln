import DisplayCartItems from "../../components/DisplayCart/DisplayCartItems";

function Cart() {
  return (
    <div className="ml-[150px] mt-[40px] mr-[100px]">
      <h2 className="text-[1.5rem] font-semibold">Your Cart</h2>

      <div className="flex justify-between bg-gray-100 mt-9 p-6 items-center">
        <div className="flex gap-5 ">
          <p>0 Item(s)</p>
          <p className="font-bold">Estimated Total: $0.00</p>
        </div>

        <div>
          <button className="bg-gray-200 text-gray-600 font-semibold py-2 px-[140px]">
            Checkout
          </button>
        </div>
      </div>

      <div></div>

      <DisplayCartItems />
    </div>
  );
}

export default Cart;
