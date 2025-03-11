import { useDispatch } from "react-redux";
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, price, image, quantity } = item;

  return (
    <div className="flex gap-4 py-4 border-b border-gray-200">
      <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-800 mb-1 truncate">
          {name}
        </h4>
        <p className="text-sm text-gray-600 mb-2">${price.toFixed(2)}</p>

        <div className="flex items-center">
          <button
            onClick={() => dispatch(decreaseQuantity(id))}
            className="p-1 rounded-md hover:bg-gray-100"
            aria-label="Decrease quantity"
          >
            <MinusIcon className="h-4 w-4 text-gray-600" />
          </button>

          <span className="mx-2 text-sm font-medium w-6 text-center">
            {quantity}
          </span>

          <button
            onClick={() => dispatch(addToCart(item))}
            className="p-1 rounded-md hover:bg-gray-100"
            aria-label="Increase quantity"
          >
            <PlusIcon className="h-4 w-4 text-gray-600" />
          </button>

          <button
            onClick={() => dispatch(removeFromCart(id))}
            className="p-1 rounded-md hover:bg-gray-100 ml-auto"
            aria-label="Remove item"
          >
            <TrashIcon className="h-4 w-4 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
