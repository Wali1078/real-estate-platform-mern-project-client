import React from "react";
import { Link } from "react-router-dom";

const WishListCard = ({ wishlist }) => {
  console.log(Object.keys(wishlist).join(","));
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
    agentImg,
    desc,
  } = wishlist || {};
  return (
    <div>
      <div className="my-4  rounded-lg bg-gray-200 shadow dark:bg-gray-900">
        <div className="mx-3 flex flex-row px-2 py-2">
          <div className="h-auto w-auto rounded-full">
            <img
              className="h-16 w-16 cursor-pointer rounded-full object-cover shadow"
              alt="User avatar"
              src={agentImg && agentImg}
            />
          </div>
          <div className="mb-2 ml-4 mt-1 flex flex-col">
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-50">
              Agent : {agentName ? agentName : "agent"}
            </div>
            <div className="mt-1 flex w-full">
              <div>
                {" "}
                <span className="dark:text-white">Property Status : </span>
                <span className="font-base mr-1 cursor-pointer text-lg text-green-800 dark:text-green-400">
                  {verificationStatus}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-3 mb-7 mt-1 px-2 text-sm font-medium text-gray-400">
          <img className="w-full rounded" src={image} alt="Advertisement" />
        </div>
        <div className="mx-3 text-xl mb-2 px-2 font-semibold text-gray-600 dark:text-gray-300">
          Title : {title}
        </div>
        <div className="mx-3 text-md mb-2 px-2 font-semibold text-gray-600 dark:text-gray-300">
          Price : ${priceRangeStart} to ${priceRangeEnd}
        </div>
        <div className="mx-3 mb-2 px-2 font-semibold text-slate-500">
          Location : {location}
        </div>

        <div className="text-center pb-5 ">
          <Link to={`/dashboard/wishlist/make-offer/${_id}`}>
            <button
              type="button"
              className="rounded-md mr-3 mb-2 border-2 border-slate-400 px-5 py-2 text-sm font-medium text-slate-400 shadow-md transition duration-150 ease-in-out hover:bg-slate-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600"
            >
              Make an Offer
            </button>
          </Link>
          <span>
            <button
              type="button"
              className="rounded-md  border-2 border-red-400 px-5 py-2 text-sm font-medium text-red-400 shadow-md transition duration-150 ease-in-out hover:bg-red-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600"
            >
              Remove from Wishlist
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
