import { useDispatch, useSelector } from "react-redux";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { addToCart, decreaseQuantity } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartItem = cartItems.find((item) => item.id === product.id);
  const isInCart = Boolean(cartItem);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleIncrement = () => {
    dispatch(addToCart(product));
  };

  const handleDecrement = () => {
    dispatch(decreaseQuantity(product.id));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600">
            ₹{product.price.toFixed(2)}
          </span>

          {isInCart ? (
            <div className="flex items-center space-x-3">
              <button
                onClick={handleDecrement}
                className="bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-md transition-colors shadow-sm"
                aria-label="Decrease quantity"
              >
                <MinusIcon className="h-6 w-6" />
              </button>
              <span className="font-medium text-gray-800 text-lg w-6 text-center">
                {cartItem.quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="bg-indigo-600 hover:bg-indigo-700 text-white p-1.5 rounded-md transition-colors shadow-sm"
                aria-label="Increase quantity"
              >
                <PlusIcon className="h-6 w-6" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors shadow-sm font-medium"
            >
              <PlusIcon className="h-5 w-5" />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
