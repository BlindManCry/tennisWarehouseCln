import { useState } from "react";
import { useItems } from "../Contexts/ItemsContext";
import Modal from "./Modal";

function ModalSignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signIn, setSignIn] = useState(false);
  const [isNotMatched, setIsNotMatched] = useState(false);
  const [smallPassword, setSmallPassword] = useState(false);
  console.log(smallPassword);
  const { setIsOpen, usersData } = useItems();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) return;

    if (password.length < 8) {
      setSmallPassword(true);
      setIsNotMatched(false);
      return;
    }

    if (password !== confirmPassword) {
      setIsNotMatched(true);
      setSmallPassword(false);
      return;
    }

    const newObj = {
      id: crypto.randomUUID(),
      username,
      email,
      password,
      balance: 1000,
    };

    await fetch("http://localhost:7000/users", {
      method: "POST",
      body: JSON.stringify(newObj),
    });
    console.log(usersData);
    setIsOpen(false);
  }

  if (signIn) return <Modal />;

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 max-h-[100vh] z-10 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className=" w-[500px] h-auto pb-9 bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  z-50 rounded-md"
      >
        <div className="flex justify-between w-[90%] mx-auto mt-4 mb-2 items-center">
          <h1 className="text-[24px] font-bold">Account Login</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <hr className="mb-[20px]"></hr>
        <p className="text-[20px] ml-[25px] mb-[30px]">Sign Up</p>
        <div className=" flex flex-col gap-[20px] items-center relative">
          <input
            type="text"
            placeholder="username"
            className="border-2 border-black rounded-sm px-2 w-[90%] h-[40px]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email address"
            className="border-2 border-black rounded-sm px-2 w-[90%] h-[40px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-black rounded-sm px-2 w-[90%] h-[40px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirm password"
            className="border-2 border-black rounded-sm px-2 w-[90%] h-[40px]"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <p className="absolute text-blue-500 text-[13px] hover:cursor-pointer hover:border-b-[1px] hover:border-blue-500 right-[25px] top-[115%]">
            Forgot Password?
          </p>
        </div>

        {smallPassword && (
          <p className="text-start mt-4 ml-7 text-red-500 font-semibold text-[14px]">
            Password must be at least 8 characters
          </p>
        )}

        {isNotMatched && (
          <p className="text-start mt-4 ml-7 text-red-500 font-semibold text-[14px]">
            Passwords do not match
          </p>
        )}

        <div className="flex mt-[60px] justify-between w-[90%] mx-auto mb-[50px]">
          <div className="flex bg-gray-100 w-[214px] h-[53] gap-2 p-2 ">
            <input type="checkbox" />
            <p className="text-[18px]">Remember Me</p>
          </div>
          <button className="px-[30px] bg-orange-500 text-[18px] w-[214px] h-[47px] hover:cursor-pointer">
            Sign Up
          </button>
        </div>
        <hr />
        <div className="w-[90%] mx-auto mt-[25px]">
          <h1
            className="text-[16px] font-bold text-center cursor-pointer hover:underline"
            onClick={() => setSignIn(true)}
          >
            Already Have An Account?
          </h1>
          <p className="text-center">
            You can create an account during the checkout process of your next
            order.
          </p>
        </div>
      </form>
    </div>
  );
}

export default ModalSignUp;
