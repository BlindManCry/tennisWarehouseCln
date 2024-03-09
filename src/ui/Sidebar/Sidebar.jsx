function Sidebar() {
  return (
    <div className="flex flex-col items-start mt-7">
      <div className="flex flex-col gap-4">
        <button className="bg-red-700 text-[#fff] px-[2rem] py-[0.7rem] rounded-sm  border-[1px] border-red-800">
          Specials
        </button>
        <button className="px-[2rem] py-[0.7rem] rounded-sm border-[1px] border-black">
          Shop By Brand
        </button>
      </div>

      <div className="flex flex-col mt-6 gap-5">
        <p className="font-bold">Tennis Racquets</p>
        <p className="font-bold">Junior Store</p>
        <p className="font-bold">Men's Apparel</p>
        <p className="font-bold">Women's Apparel</p>
        <p className="font-bold">Socks</p>
        <p className="font-bold">Other Apparel</p>
        <p className="font-bold">Men's Shoes</p>
        <p className="font-bold">Women's Shoes</p>
        <p className="font-bold">Tennis Balls</p>
        <p className="font-bold">Tennis Bags</p>
        <p className="font-bold">Strings & Stringing</p>
        <p className="font-bold">Grips & Accessories </p>
        <p className="font-bold">Other Items</p>
        <p className="font-bold">Gifts & Novelty Items</p>
        <p className="font-bold">Team Orders </p>
        <p className="font-bold">Pro Player Gear</p>
      </div>

      <div className="flex flex-col mt-6 gap-1">
        <p className="text-sm cursor-pointer hover:underline">Reviews</p>
        <p className="text-sm cursor-pointer hover:underline">
          Learning Center
        </p>
        <p className="text-sm cursor-pointer hover:underline">Improve</p>
        <p className="text-sm cursor-pointer hover:underline">Message Board</p>
        <p className="text-sm cursor-pointer hover:underline">Podcast</p>
      </div>

      <hr className="mt-4 w-full h-[2px] bg-gray-400" />

      <div className="flex flex-col mt-4">
        <p className="text-sm cursor-pointer hover:underline">Clearance</p>
      </div>

      <hr className="mt-4 w-full h-[1px] bg-gray-400" />

      <div className="felx flex-col mt-4 gap-1">
        <p className="text-sm cursor-pointer hover:underline">Wish List</p>
        <p className="text-sm cursor-pointer hover:underline">Gift Cards</p>
        <p className="text-sm cursor-pointer hover:underline">Support</p>
        <p className="text-sm cursor-pointer hover:underline">Account Login</p>
        <p className="text-sm cursor-pointer hover:underline">Mailing List</p>
      </div>

      <hr className="mt-4 w-full h-[2px] bg-gray-400 mb-4" />
    </div>
  );
}

export default Sidebar;
