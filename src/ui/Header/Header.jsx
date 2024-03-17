import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";
import { useState } from "react";
import Modal from "../Modal";
import { useItems } from "../../Contexts/ItemsContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { setModalEnabled } = useItems();

  function handleOpenModal() {
    setModalEnabled(true);
    setIsOpen(true);
  }
  return (
    <div>
      <div className="flex justify-center bg-orange-600 py-[7px]">
        <p className="border-r px-7 border-black text-[#fff]">
          Join Our Mailing List
        </p>

        <p className="px-7 border-r border-black  text-[#fff]">Free Returns</p>

        <p className="px-7  text-[#fff]">Free Shipping over $50</p>
      </div>

      <div className="bg-blue-900">
        <div className="flex justify-between w-[90%] m-auto py-3 relative">
          <Link className="flex">
            <img
              src="https://media.discordapp.net/attachments/944273809568051251/1215952694942892032/tweu_5.png?ex=65fe9f31&is=65ec2a31&hm=b1dbf9b9ad496525514d3bf7a7f7b3cf8f6144e767714f91519501c57450a115&=&format=webp&quality=lossless&width=1440&height=467"
              alt=""
              className="w-[240px]"
            />
          </Link>

          <div className="flex gap-5 items-end text-[#fff]">
            <p>📱</p>
            <p>1.800.883.6647</p>
            <p>Support</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleOpenModal()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
        </div>
        {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>

      <Search />
    </div>
  );
}

export default Header;
