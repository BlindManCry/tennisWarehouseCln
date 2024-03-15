// import { useEffect, useState } from "react";
// import { useItems } from "../../Contexts/ItemsContext";

// function SingleProduct() {
//   const [sizes, setSizes] = useState([]);
//   const [quantity, setQuantity] = useState(1);
//   const [choosenSize, setChoosenSize] = useState(0);
//   const [abloToAddCart, setAbleToAddCart] = useState(false);
//   const [alreadyInCart, setAlreadyInCart] = useState("");

//   const { clickedProduct, cartItems, setCartItems } = useItems();
//   console.log(cartItems);

//   function handleIncreaseQuantity() {
//     setQuantity((quantity) => quantity + 1);
//   }

//   function handleDecreaseQuantity() {
//     if (quantity === 1) return;
//     setQuantity((quantity) => quantity - 1);
//   }

//   function handleAddToCart(product) {
//     try {
//       for (let i = 0; i < cartItems.length; i++) {
//         if (cartItems[i].id === product.id)
//           throw new Error("You already have this item in the cart");
//       }
//       const newObj = {
//         id: product.id,
//         image: product.image,
//         title: product.title,
//         quantity,
//         price: product.newPrice,
//         totalPrice: product.newPrice * quantity,
//       };
//       setCartItems([...cartItems, newObj]);
//     } catch (error) {
//       setAlreadyInCart(error.message);
//     }
//   }

//   useEffect(function () {
//     async function getSizes() {
//       const res = await fetch("http://localhost:5000/sizes");
//       const data = await res.json();
//       setSizes(data);
//     }
//     getSizes();
//   }, []);
//   return (
//     <div className="flex mt-8 ml-7 gap-[60px]">
//       <div className="w-[60%]">
//         <img
//           src={clickedProduct?.image}
//           alt=""
//           className="w-[540px] h-[500px] mt-[150px]"
//         />
//       </div>
//       <div className="w-[40%] border-[1px] border-gray-300 p-[30px] flex flex-col gap-4">
//         <h2 className="text-[2rem] font-semibold">{clickedProduct?.title}</h2>
//         <p className="mt-9 text-[1.25rem] font-semibold">
//           ${clickedProduct?.newPrice.toFixed(2)}
//         </p>
//         <p className="mt-7 text-[0.75rem] font-semibold">Shoe Size:</p>
//         <div className="mt-1 grid grid-cols-4 gap-x-2 gap-y-2">
//           {sizes?.map((item, index) => {
//             return (
//               <p
//                 key={index}
//                 className={`border-[1px] ${
//                   choosenSize === item.id
//                     ? "border-orange-500"
//                     : "border-gray-400"
//                 }  px-5 py-3 text-center cursor-pointer`}
//                 onClick={() => {
//                   setChoosenSize(item.id);
//                   setAbleToAddCart(true);
//                 }}
//               >
//                 {item.size}
//               </p>
//             );
//           })}
//         </div>
//         <p className="mt-7 text-[0.75rem] font-semibold"> Quantity:</p>
//         <div className="mt-1 flex justify-between items-center">
//           <p
//             className="border-[1px] border-gray-600 px-5 py-2 text-center cursor-pointer"
//             onClick={handleDecreaseQuantity}
//           >
//             -
//           </p>
//           <p className="w-[75%] border-y-[1px] border-gray-600 text-center px-5 py-2">
//             {quantity}
//           </p>
//           <p
//             className="border-[1px] border-gray-600 px-5 py-2 text-center cursor-pointer"
//             onClick={handleIncreaseQuantity}
//           >
//             +
//           </p>
//         </div>
//         <div className="mt-7">
//           {!abloToAddCart ? (
//             <button
//               className="w-full px-4 py-2 bg-gray-300 text-gray-400 font-semibold"
//               disabled
//             >
//               Add To Cart
//             </button>
//           ) : (
//             <>
//               <button
//                 className="w-full px-4 py-2 bg-cyan-300 text-cyan-600 font-semibold"
//                 onClick={() => handleAddToCart(clickedProduct)}
//               >
//                 Add To Cart
//               </button>
//               <p className="text-[0.75rem] mt-3 text-center text-red-400 font-semibold">
//                 {alreadyInCart}
//               </p>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingleProduct;
