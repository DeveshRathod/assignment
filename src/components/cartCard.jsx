import React from "react";
import { cartState } from "../store/cartState";
import { useRecoilState } from "recoil";
import DeleteIcon from "@mui/icons-material/Delete";

const CartCard = ({ id, title, image, price }) => {
  const [cart, setCart] = useRecoilState(cartState);

  const handleDelete = () => {
    // Filter out the item with the given id
    const updatedCart = cart.filter((item) => item.id !== id);
    // Update the cart state
    setCart(updatedCart);
  };

  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-md">
      <img
        src={image}
        alt={title}
        className="w-20 h-20 object-cover rounded-md mr-4"
      />
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">Price: ${price}</p>
      </div>
      <button onClick={handleDelete}>
        <DeleteIcon className="text-red-500" />
      </button>
    </div>
  );
};

export default CartCard;
