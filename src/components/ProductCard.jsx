import React from "react";

const ProductCard = ({ product, cart, setCart }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const addToCart = () => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      setCart((prevCart) => [...prevCart, product]);
    } else {
      const updatedCart = cart.filter((item) => item.id !== product.id);
      setCart(updatedCart);
    }
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-full">
          ${product.price}
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {truncateText(product.title, 20)}
        </div>
        <p className="text-gray-700 text-base mb-2">
          {truncateText(product.description, 60)}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-base">Rating: {product.rating}</p>
          <p className="text-gray-700 text-base">Stock: {product.stock}</p>
        </div>
        <button
          className="bg-gray-800 text-white w-full p-2 mt-2 rounded-sm"
          onClick={addToCart}
        >
          {cart.some((item) => item.id === product.id)
            ? "Remove from Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
