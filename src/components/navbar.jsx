import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchInput from "./searchInput";
import CloseIcon from "@mui/icons-material/Close";
import CartCard from "./cartCard";
import { cartState } from "../store/cartState";
import { useRecoilValue } from "recoil";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Navbar = ({ setIsAuth }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const cart = useRecoilValue(cartState);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const total = cart.reduce((totalPrice, item) => {
    return totalPrice + item.price;
  }, 0);

  return (
    <div>
      <div className="flex justify-between items-center p-2 sm:p-8">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            setIsAuth(false);
          }}
        >
          <LogoutIcon className="text-red-700" />
        </button>
        <SearchInput />

        <button onClick={openSidebar} className=" flex gap-2">
          <div>
            <AttachMoneyIcon />${total}
          </div>
          <div>
            {" "}
            <ShoppingCartIcon />
            {cart.length > 0 ? <span>{cart.length}</span> : <>0</>}
          </div>
        </button>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute top-0 right-0 h-full w-4/5 sm:w-2/5 bg-black text-white">
            <button className="absolute top-4 right-4" onClick={closeSidebar}>
              <CloseIcon />
            </button>
            {cart.length > 0 ? (
              <div className=" flex p-3 gap-5 flex-col">
                <div>
                  <h1>Total: ${total.toFixed(2)}</h1>
                </div>
                <div className=" flex gap-3 flex-col">
                  {cart.map((item, index) => (
                    <CartCard
                      key={index}
                      title={item.title}
                      image={item.thumbnail}
                      price={item.price}
                      id={item.id}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center h-full">
                <h1 className="text-white">Nothing in the cart...</h1>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
