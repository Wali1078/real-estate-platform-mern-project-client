// npm install --save @stripe/react-stripe-js @stripe/stripe-js
// https://stripe.com/docs/stripe-js/react
// https://stripe.com/docs/payments/quickstart?client=react&lang=node

import {loadStripe} from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import { Helmet } from 'react-helmet-async';
import CheckoutForm from './CheckoutForm';
import { useLoaderData } from 'react-router-dom';


// add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
const bookingInfo = useLoaderData()
console.log(bookingInfo);
  return (
    <div>
            <Helmet>
              <title>Payment</title>
            </Helmet>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm bookingInfo={bookingInfo}></CheckoutForm>
                </Elements>
            </div>
        </div>
)
}

export default Payment
