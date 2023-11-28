import { Helmet } from "react-helmet-async";
import Title from "../../../../components/Title/Title";

import useAuth from "../../../../hooks/useAuth";

import {
 
  updateSingleWishlist,
} from "../../../../api/properties";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../../../../components/Shared/Loader";

const MakeAnOffer = () => {
  const { loading } = useAuth();
const wishlist = useLoaderData()
console.log(wishlist);
  const currentDate = new Date().toISOString().split("T")[0];
  console.log(wishlist);
  const handleMakeAnOffer = async (e) => {
    e.preventDefault();

    const offerPrice = e.target.offer.value;
    const buyingDate = e.target.date.value;
    const updatingData = { offerPrice, buyingDate, status: "pending" };
    // console.log(updatingData);
    console.log(wishlist.priceRangeStart);
    console.log(wishlist.priceRangeEnd);
    console.log(typeof offerPrice);
    if (
        parseInt(offerPrice) < parseInt(wishlist?.priceRangeStart) ||
        parseInt(offerPrice) > parseInt(wishlist?.priceRangeEnd)
    ) {
      toast.error(
        `Offer Amount should be in between $${wishlist?.priceRangeStart} to $${wishlist?.priceRangeEnd}`
      );
      return;
    }
    try {
      const data = await updateSingleWishlist(wishlist?._id, updatingData);
      // console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Make Offer Successful");
      } else {
        toast.success("Already Marked as Offered! ");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  if(loading) return <Loader/>
  return (
    <div>
      <Helmet>
        <title>Make an offer</title>
      </Helmet>
      <Title name={`Make an Offer`} />
      <div className="w-full min-h-screen p-4 flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 dark:bg-slate-600">
        <form onSubmit={handleMakeAnOffer}>
          <div className="grid grid-cols-1  gap-10">
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="location"
                  className="block text-gray-600 dark:text-gray-200"
                >
                  Location
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md dark:bg-zinc-200"
                  name="location"
                  defaultValue={wishlist?.location}
                  id="location"
                  type="text"
                  placeholder="Location"
                  disabled
                />
              </div>

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="title"
                  className="block text-gray-600 dark:text-gray-200"
                >
                  Title
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md dark:bg-zinc-200"
                  name="title"
                  defaultValue={wishlist?.title}
                  id="title"
                  type="text"
                  placeholder="Title"
                  disabled
                />
              </div>
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="agent"
                  className="block text-gray-600 dark:text-gray-200"
                >
                  Agent Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md dark:bg-zinc-200"
                  name="agent"
                  defaultValue={wishlist?.agentName}
                  id="agent"
                  type="text"
                  min={1}
                  placeholder="Agent Name"
                  disabled
                />
              </div>

              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="price"
                    className="block text-gray-600 dark:text-gray-200"
                  >
                    Price Start From ($)
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md dark:bg-zinc-200"
                    name="priceStart"
                    defaultValue={wishlist?.priceRangeStart}
                    id="price"
                    type="number"
                    min={1}
                    placeholder="Price"
                    disabled
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="price"
                    className="block text-gray-600 dark:text-gray-200"
                  >
                    Price Ends At ($)
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md dark:bg-zinc-200"
                    name="priceEnd"
                    defaultValue={wishlist?.priceRangeEnd}
                    id="price"
                    type="number"
                    min={1}
                    placeholder="Price"
                    disabled
                  />
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="offer"
                  className="block text-gray-600 dark:text-gray-200"
                >
                  Offer Amount
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md dark:bg-zinc-200"
                  name="offer"
                  id="offer"
                  type="number"
                  min={1}
                  placeholder="Offer Amount"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="BuyingDate"
                  className="block text-gray-600 dark:text-gray-200"
                >
                  Buying Date
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md dark:bg-zinc-200"
                  name="date"
                  id="date"
                  type="date"
                  min={currentDate}
                  placeholder="Buying Date"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label
                  htmlFor="BuyerEmail"
                  className="block text-gray-600 dark:text-gray-200"
                >
                  Buyer Email
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md dark:bg-zinc-200"
                  name="email"
                  defaultValue={wishlist?.userEmail}
                  id="email"
                  type="email"
                  min={1}
                  placeholder="Buyer Email"
                  disabled
                />
              </div>
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="BuyerName"
                  className="block text-gray-600 dark:text-gray-200"
                >
                  Buyer Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md dark:bg-zinc-200"
                  name="name"
                  defaultValue={wishlist?.userName}
                  id="name"
                  type="text"
                  min={1}
                  placeholder="Buyer Text"
                  disabled
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-6 mt-5 text-center font-medium  shadow-md 
            rounded-md  border-2 border-slate-400 px-5 py-3 text-slate-400 transition duration-150 ease-in-out hover:bg-slate-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600 dark:text-gray-200 text-lg"
          >
           Make An Offer
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAnOffer;
