import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../actions/cartSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleCartEmpty=()=>{
    dispatch(clearCart());
  }
  return (
    <div className="w-6/12 mx-auto m-4 p-4 bg-gray-100 rounded-md shadow-md">
      <div className="flex justify-between mb-6">
        <h2 className="text-center text-gray-700 font-semibold text-xl">
          Cart
        </h2>
        <button onClick={handleCartEmpty} className="text-orange-400 text-xs px-2 py-1 border border-orange-400 font-semibold rounded-md cursor-pointer">
          Empty Cart <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
      {cart?.item.length > 0 ? (
        <ItemList items={cart?.item} type="cart" />
      ) : (
        <div className="text-center my-10 text-xl text-gray-500">
          Cart is empty
        </div>
      )}
    </div>
  );
};

export default Cart;
