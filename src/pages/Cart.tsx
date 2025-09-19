import { useCartStore } from "../store/cartStore";
import { FiTrash2 } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, totalQuantity, removeFromCart } = useCartStore();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaShoppingCart className="w-6 h-6 text-gray-700" />
        Your Cart
      </h1>

      {items.length === 0 ? (
      
        <div className="flex flex-col items-center justify-center py-20">
          <FaShoppingCart className="w-16 h-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6 text-center max-w-sm">
            Looks like you haven’t added anything to your cart yet. 
            Explore our products and find something you love!
          </p>
          <Link
            to="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Back to Products
          </Link>
        </div>
      ) : (
      
        <div className="grid md:grid-cols-3 gap-8">
      
          <div className="md:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded"
                  />
                  <div>
                    <h2 className="font-semibold text-sm">{item.title}</h2>
                    <p className="text-gray-500 text-sm">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                  title="Remove item"
                >
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

       
          <div className="bg-gray-100 p-6 rounded-lg shadow-md h-fit">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <HiOutlineDocumentReport className="w-5 h-5 text-gray-700" />
              Summary
            </h3>
            <div className="flex justify-between mb-2 text-sm">
              <span>Subtotal ({totalQuantity} items)</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4 text-sm">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-md mt-4">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full mt-6 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
