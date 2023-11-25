import React from 'react';

const AdvertisementCard = () => {
  return (
    <div>
      <div className="my-4 max-w-md rounded-lg bg-gray-200 shadow dark:bg-gray-900">
        <div className="mx-3 flex flex-row px-2 py-2">
          <div className="h-auto w-auto rounded-full">
            <img
              className="h-12 w-12 cursor-pointer rounded-full object-cover shadow"
              alt="User avatar"
              src="https://i.pinimg.com/564x/55/59/6d/55596d11739f22c9cc223aad982ac391.jpg"
            />
          </div>
          <div className="mb-2 ml-4 mt-1 flex flex-col">
            <div className="text-sm font-semibold text-gray-800 dark:text-gray-50">
              Iratxe Torrejone
            </div>
            <div className="mt-1 flex w-full">
              <div className="font-base mr-1 cursor-pointer text-xs text-slate-400">
                UX Design
              </div>
              <div className="text-xs font-thin text-gray-400">• 1 day ago</div>
            </div>
          </div>
        </div>
        <div className="mx-3 mb-7 mt-1 px-2 text-sm font-medium text-gray-400">
          <img className="w-full rounded" src="https://picsum.photos/536/354" alt="Advertisement" />
        </div>
        <div className="mx-3 mb-2 px-2 font-semibold text-slate-500">
          Dummy text of the printing
        </div>
        <div className="mx-3 mb-6 px-2 text-sm text-gray-600 dark:text-gray-300">
          The printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500
        </div>
        <div className="w-ful flex">
          <div className="mx-5 flex flex-row text-xs">
            <div className="mb-2 mr-4 flex items-center rounded-md font-normal text-gray-500 dark:text-gray-400">
              Comments:{" "}
              <div className="text-ms ml-1 text-gray-400 dark:text-gray-300">
                30
              </div>
            </div>
            <div className="mb-2 mr-4 flex items-center rounded-md font-normal text-gray-500 dark:text-gray-400">
              Views:{" "}
              <div className="text-ms ml-1 text-gray-400 dark:text-gray-300">
                60k
              </div>
            </div>
          </div>
          <div className="mx-5 flex w-full justify-end text-xs">
            <div className="mt-1 flex w-full justify-end pt-2">
              <span className="mr-2 flex h-8 w-8 cursor-pointer items-center rounded-full bg-blue-500/40 px-2 text-blue-400 backdrop-blur-md transition duration-300 ease-out hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="flex h-8 w-8 cursor-pointer items-center rounded-full bg-red-500/40 p-1 text-red-400 backdrop-blur-md transition duration-300 ease-out hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="relative flex w-full items-center self-center overflow-hidden px-5 py-4 text-gray-600 focus-within:text-gray-400">
          <img
            className="mr-2 h-10 w-10 cursor-pointer rounded-full object-cover shadow"
            alt="User avatar"
            src="https://i.pinimg.com/564x/be/1b/ad/be1bad90207e9c93e4bee9d6dce3eb64.jpg"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-6">
            <button
              type="submit"
              className="p-1 hover:text-blue-500 focus:shadow-none focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-gray-400 transition duration-300 ease-out hover:scale-105 hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            className="rounded-tg focus:shadow-outline-blue w-full appearance-none border border-transparent bg-gray-50 py-2 pl-4 pr-10 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none dark:bg-gray-800 dark:text-white"
            style={{ borderRadius: '25px' }}
            placeholder="Post a comment..."
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCard;
