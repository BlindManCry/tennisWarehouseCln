import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";

function Header() {
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
        <div className="flex justify-between w-[90%] m-auto py-3">
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
            <ion-icon name="accessibility-outline"></ion-icon>
          </div>
        </div>
      </div>

      <Search />
    </div>
  );
}

export default Header;
