import { useState } from "react";
import racket1 from "../../images/rs.webp";
import racket2 from "../../images/rs1.webp";
import racket3 from "../../images/rs2.webp";
import racket4 from "../../images/rs3.webp";
import racket5 from "../../images/rs4.webp";
import racket6 from "../../images/rs5.webp";
import racket7 from "../../images/rs6.webp";
import { wrap_translateClassnameInBabolat } from "../../helpers/classname";

function BabolatCategorieOverview() {
  const [translate, setTranslate] = useState(0);

  function handleTranslateBack() {
    setTranslate((state) => (state === 0 ? -400 : state + 100));
  }

  function handleTranslateForward() {
    setTranslate((state) => (state === -400 ? 0 : state - 100));
  }

  return (
    <div className="w-full">
      <h1 className="text-[42px] text-center">Babolat Tennis Rackets</h1>
      <p className="text-[16px] text-center mt-3">
        To speak with a racquet specialist please call{" "}
        <a href="/" className="text-blue-600 hover:border-b border-blue-600">
          +44 (0) 844 4990807
        </a>
      </p>
      <div className="ml-[50%] translate-x-[-50%] flex gap-4 justify-center mt-5">
        <button className="border-[1px] border-black rounded-[3px]  px-2 bg-orange-600 text-white text-[18px] hover:bg-black hover:text-white transition-all">
          All
        </button>
        <button className="border-[1px] border-black rounded-[3px] px-2 text-[18px] hover:bg-black hover:text-white transition-all">
          New
        </button>
        <button className="border-[1px] border-black rounded-[3px] px-2 text-[18px] hover:bg-black hover:text-white transition-all">
          Best Sellers
        </button>
        <button className="border-[1px] border-black rounded-[3px] px-2 text-[18px] hover:bg-black hover:text-white transition-all">
          Babolat Sale
        </button>
        <button className="border-[1px] border-black rounded-[3px] px-2 text-[18px] hover:bg-black hover:text-white transition-all">
          Spin
        </button>
        <button className="border-[1px] border-black rounded-[3px] px-2 text-[18px] hover:bg-black hover:text-white transition-all">
          All Around
        </button>
        <button className="border-[1px] border-black rounded-[3px] px-2 text-[18px] hover:bg-black hover:text-white transition-all">
          Control
        </button>
        <button className="border-[1px] border-black rounded-[3px] px-2 hover:bg-black hover:text-white transition-all">
          Power
        </button>
      </div>
      <div className="relative">
        <svg
          onClick={() => handleTranslateBack()}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 absolute top-[50%] left-5 hover:cursor-pointer hover:w-12 hover:h-12 transition-all"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>

        <svg
          onClick={() => handleTranslateForward()}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 absolute right-5 top-[50%] hover:cursor-pointer hover:w-12 hover:h-12 transition-all"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>

        <div className="w-[85%] mx-auto flex border-[2px] mt-[60px] py-3 overflow-hidden">
          <div
            className={`flex flex-col items-center gap-4 hover:cursor-pointer border-r-[2px] min-w-[25%] ${wrap_translateClassnameInBabolat(
              translate
            )} transition-all`}
          >
            <img src={racket1} alt="racket" className="h-[280px]" />
            <p className="text-[19px] font-bold">Pure Strike</p>
            <p className="text-sm px-7  text-center">
              Theese rackets offer more control and feel to the ball than other
              babolat rackets and also have awesome stability for their weight.
            </p>
            <p className="mt-4 text-sm hover:border-b-[1px] border-black">
              Shop Now
            </p>
          </div>
          <div
            className={`flex flex-col items-center gap-4 hover:cursor-pointer border-r-[2px] min-w-[25%] ${wrap_translateClassnameInBabolat(
              translate
            )} transition-all`}
          >
            <img src={racket2} alt="racket" className="h-[280px]" />
            <p className="text-[19px] font-bold">Pure sStrike</p>
            <p className="text-sm px-7  text-center">
              Theese rackets offer more control and feel to the ball than other
              babolat rackets and also have awesome stability for their weight.
            </p>
            <p
              className={`mt-4 text-sm hover:border-b-[1px] border-black transition-all`}
            >
              Shop Now
            </p>
          </div>
          <div
            className={`flex flex-col items-center gap-4 hover:cursor-pointer border-r-[2px] min-w-[25%] ${wrap_translateClassnameInBabolat(
              translate
            )} transition-all`}
          >
            <img src={racket3} alt="racket" className="h-[280px]" />
            <p className="text-[19px] font-bold">Pure Strike</p>
            <p className="text-sm px-7  text-center">
              Theese rackets offer more control and feel to the ball than other
              babolat rackets and also have awesome stability for their weight.
            </p>
            <p className="mt-4 text-sm hover:border-b-[1px] border-black">
              Shop Now
            </p>
          </div>
          <div
            className={`flex flex-col items-center gap-4 hover:cursor-pointer  min-w-[25%] ${wrap_translateClassnameInBabolat(
              translate
            )} transition-all`}
          >
            <img src={racket4} alt="racket" className="h-[280px]" />
            <p className="text-[19px] font-bold">Pure Strike</p>
            <p className="text-sm px-7  text-center">
              Theese rackets offer more control and feel to the ball than other
              babolat rackets and also have awesome stability for their weight.
            </p>
            <p className="mt-4 text-sm hover:border-b-[1px] border-black">
              Shop Now
            </p>
          </div>
          <div
            className={`flex flex-col items-center gap-4 hover:cursor-pointer  min-w-[25%] ${wrap_translateClassnameInBabolat(
              translate
            )} transition-all`}
          >
            <img src={racket5} alt="racket" className="h-[280px]" />
            <p className="text-[19px] font-bold">Pure Strike</p>
            <p className="text-sm px-7  text-center">
              Theese rackets offer more control and feel to the ball than other
              babolat rackets and also have awesome stability for their weight.
            </p>
            <p className="mt-4 text-sm hover:border-b-[1px] border-black">
              Shop Now
            </p>
          </div>
          <div
            className={`flex flex-col items-center gap-4 hover:cursor-pointer  min-w-[25%] ${wrap_translateClassnameInBabolat(
              translate
            )} transition-all`}
          >
            <img src={racket6} alt="racket" className="h-[280px]" />
            <p className="text-[19px] font-bold">Pure Strike</p>
            <p className="text-sm px-7  text-center">
              Theese rackets offer more control and feel to the ball than other
              babolat rackets and also have awesome stability for their weight.
            </p>
            <p className="mt-4 text-sm hover:border-b-[1px] border-black">
              Shop Now
            </p>
          </div>
          <div
            className={`flex flex-col items-center gap-4 hover:cursor-pointer  min-w-[25%] ${wrap_translateClassnameInBabolat(
              translate
            )} transition-all`}
          >
            <img src={racket7} alt="racket" className="h-[280px]" />
            <p className="text-[19px] font-bold">Pure Strike</p>
            <p className="text-sm px-7  text-center">
              Theese rackets offer more control and feel to the ball than other
              babolat rackets and also have awesome stability for their weight.
            </p>
            <p className="mt-4 text-sm hover:border-b-[1px] border-black">
              Shop Now
            </p>
          </div>
          <div
            className={`flex flex-col items-center gap-4 hover:cursor-pointer  min-w-[25%] ${wrap_translateClassnameInBabolat(
              translate
            )} transition-all`}
          >
            <img src={racket3} alt="racket" className="h-[280px]" />
            <p className="text-[19px] font-bold">Pure Strike</p>
            <p className="text-sm px-7  text-center">
              Theese rackets offer more control and feel to the ball than other
              babolat rackets and also have awesome stability for their weight.
            </p>
            <p className="mt-4 text-sm hover:border-b-[1px] border-black">
              Shop Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BabolatCategorieOverview;
