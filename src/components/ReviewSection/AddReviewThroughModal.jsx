import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { addReview } from "../../api/review";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useSingleProperties from "../../hooks/useSingleProperty";
import { useParams } from "react-router-dom";

export default function AddReviewThroughModal({property,refetch}) {
  
const {user} = useAuth()
  const {
    _id,
    title,
    image,
    location,
    // priceRangeStart,
    // priceRangeEnd,
    // verificationStatus,
    agentName,
    agentEmail,
    agentImg,
    // desc,
  } = property || {};
//  console.log(property);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSubmitReview = async(e) => {
    e.preventDefault()
const text = e.target.myTextarea.value
const reviewData = {
  oldId : _id,
  userName:user?.displayName,
  userEmail : user?.email,
  userImg:user?.photoURL,
  title,
  image,
  location,
  agentName,
  agentEmail,
  agentImg,
review:text,
reviewTime:new Date()
}
try {
  const data = await addReview(reviewData)
console.log(data);
if(data.insertedId){
toast.success("Review added successfully")
refetch()
closeModal()
}
} catch (error) {
  toast.error(error.message)
}
  };

  return (
    <>
      <div className=" inset-0 flex items-center justify-center ">
        <button
          type="button"
          onClick={openModal}
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
        >
          Add a Review
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-500 ">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Add a Review
                  </Dialog.Title>
                    <form action="" onSubmit={handleSubmitReview}>
                  <div className="mt-6">
                      <textarea
                        name="myTextarea"
                        className="w-full h-32 p-4 dark:bg-stone-700 text-white"
                        placeholder="Your message here"
                        minLength="10"
                        maxLength="500"
                        required
                      ></textarea>
                  </div>

                  <div className="mt-4 flex justify-center gap-8">
                    <button
                      type="submit"
                      className="  border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg focus-visible:ring-offset-2"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="  border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-z-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                    </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
