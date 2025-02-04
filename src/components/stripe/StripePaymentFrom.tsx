import { useOrderconfirmMutation } from "@/feature/order/orderSlice";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";

export default function StripePaymentFrom({ orderData }) {
    const [confirmpaymnet, {isLoading, isSuccess}] = useOrderconfirmMutation()
    const stripe = useStripe();
    const elements = useElements();
    const click = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const { paymentIntent, error: paymentError } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: ''
            },
            redirect: 'if_required'
        })
        if (paymentError) {
            console.log('paymentError', paymentError)
            //toast.error('Sorry Payment Not Accept')
        }
        if (paymentIntent) {
            const orderCon = {
                ...orderData,
                trxID: paymentIntent?.id
            }
           await confirmpaymnet(orderCon) 
        
        }
    }


    return (
        <div>
            <div className="modal-dialog" >
                <div className="modal-content modal-content-scrollable"

                >
                    <div>
                        <h6 className="text-end" >
                            <a >x</a>
                        </h6>
                    </div>
                    <form onSubmit={click} className="w-75 mx-auto mt-5">

                        <PaymentElement></PaymentElement>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full flex mt-20 justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white transition duration-150 ease-in-out ${isLoading
                                ? 'bg-blue-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                                }`}
                        >
                            {isLoading ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Loading...
                                </span>
                            ) : (
                                'Pay'
                            )}
                        </button>














                    </form>
                </div>
            </div>
        </div>
    )
}