import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import {
  selectCartItems,
  selectCartTotalAmount,
  incrementQuantity,
  decrementQuantity,
  removeFromCart
} from '@/feature/cart/cartSlice';
import { useOrderCheckoutMutation } from '@/feature/order/orderSlice';
import StripePaymentFrom from '@/components/stripe/StripePaymentFrom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


export default function CartPage() {
  const [stripePromise, setStripePromise] = useState(null)
  const [clientSecret, setClientSecret] = useState('')

  const [orderCheckout, { data: checkout, isLoading, isSuccess }] = useOrderCheckoutMutation()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleCheckout = async () => {
    setIsProcessing(true);
    setError('');
    const user = localStorage.getItem('email');

    try {
      if (!user) {
        navigate('/login');
        return;
      }
      const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
      const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const checkoutData = {
        email: user,
        products: cartItems.map(item => ({
          product: item.id, 
          quantity: item.quantity,
          price: item.price
        })),
        totalItems: totalQuantity,
        totalPrice: totalPrice,
      }
      await orderCheckout(checkoutData)

    } catch (err) {
      console.error('Checkout error:', err);
      setError('Failed to process checkout. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    setStripePromise(loadStripe('pk_test_51L1wwjDAYSz72lr1nWsB0uKFEeZD8Fsn8DJsi1GnCoBa3Tcwcyx8pKA9bFiocuR31NlbpOgeOs8nriYtWVKH8M8l00OFtQIs4F'))
    setClientSecret(checkout?.data?.paymentIntent?.client_secret)
  }, [isLoading, isSuccess, checkout]);



  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  if (checkout?.success) {
    return (

      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Stipe Paymnet Method</h2>
            <p className="mt-2 text-sm text-gray-600">Join our community today</p>
          </div>
          <>
            {clientSecret && stripePromise && <Elements
              stripe={stripePromise} options={{ clientSecret }}>
              <StripePaymentFrom  orderData={checkout?.data?.result}/>
            </Elements>}
          </>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">

      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              {cartItems?.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 border-b last:border-b-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-md"
                  />

                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600">৳{item.price}</p>

                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          className="p-2 hover:bg-gray-100"
                        >
                          <FaMinus className="w-4 h-4" />
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className="p-2 hover:bg-gray-100"
                        >
                          <FaPlus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold">৳{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>৳{totalAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>৳50</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>৳{totalAmount + 50}</span>
                  </div>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                  <p className="text-red-700">{error}</p>
                </div>
              )}

              <button
                onClick={handleCheckout}
                disabled={isProcessing || cartItems.length === 0}
                className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md 
                  ${isProcessing || cartItems.length === 0
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-blue-700'} 
                  transition-colors`}
              >
                {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
              </button>

              <Link
                to="/products"
                className="block text-center text-blue-600 hover:text-blue-800 mt-4"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
