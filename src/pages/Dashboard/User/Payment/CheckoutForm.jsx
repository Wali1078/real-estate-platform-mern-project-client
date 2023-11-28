import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { TbLoader3 } from "react-icons/tb";
import Title from "../../../../components/Title/Title";
import {
  createPaymentIntent,
  saveBookingInfo,
  updateStatus,
} from "../../../../api/bookings";
import { updateSingleWishlist } from "../../../../api/properties";

const CheckoutForm = ({ bookingInfo }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // create payment intent
    if (bookingInfo.offerPrice > 0) {
      createPaymentIntent({ price: bookingInfo.offerPrice }).then((data) => {
        console.log(data.clientSecret);
        setClientSecret(data.clientSecret);
      });
    }
  }, [bookingInfo]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // Card data lookup (Asynchronous Network Call )
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }

    setProcessing(true);

    // money will deduct here
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    }

    console.log("payment intent", paymentIntent);
    // console.log(Object.keys(bookingInfo).join(","));
    const {
      _id,
      oldId,
      userName,
      userEmail,
      title,
      image,
      location,
      priceRangeStart,
      priceRangeEnd,
      verificationStatus,
      agentName,
      agentEmail,
      agentImg,
      desc,
      buyingDate,
      offerPrice,
    } = bookingInfo || {};
    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        oldId,
        userName,
        userEmail,
        title,
        image,
        location,
        priceRangeStart,
        priceRangeEnd,
        verificationStatus,
        agentName,
        agentEmail,
        agentImg,
        desc,
        buyingDate,
        offerPrice,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      try {
        // save payment information to the server
        await saveBookingInfo(paymentInfo);

        // Update room status in db
        await updateStatus(_id, "bought");
        await updateSingleWishlist(_id,{transactionId: paymentIntent.id, paymentDate: new Date()})
        const text = `Payment Successful! ${paymentIntent.id}`;
        toast.success(text);
        navigate("/dashboard/property-bought");
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      } finally {
        setProcessing(false);
      }

      setProcessing(false);
    }
  };

  return (
    <>
      <Title name={`Make Payment`}></Title>
      <div className="mt-36 md:mt-56">
        <form className="my-2" onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <div className="flex mt-2 justify-around">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!stripe || !clientSecret || processing}
              className="inline-flex justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
            >
              {processing ? (
                <TbLoader3 className="m-auto animate-spin" size={24} />
              ) : (
                `Pay ${bookingInfo?.offerPrice}$`
              )}
            </button>
          </div>
        </form>
        {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      </div>
    </>
  );
};

export default CheckoutForm;
