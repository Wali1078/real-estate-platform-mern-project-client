import { TbLoader3 } from "react-icons/tb";
import useAuth from "../../../../hooks/useAuth";
import { uploadImage } from "../../../../api/utils";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addProperty } from "../../../../api/properties";
import { Helmet } from "react-helmet-async";
import Title from "../../../../components/Title/Title";

const AddProperty = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image (**Required**)');
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
    setImageFile(image);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(image);
  };

  const handleDeleteImage = () => {
    setUploadButtonText('Upload Image (**Required**)');
    setImagePreview(null);
    setImageFile(null);
  };

  const handleAddProperty = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const priceStart = parseFloat(e.target.priceStart.value);
    const priceEnd = parseFloat(e.target.priceEnd.value);

    if (priceStart >= priceEnd) {
      toast.error("'Price Start From' must be less than 'Price Ends At'");
      setIsLoading(false);
      return;
    }

    const form = e.target;
    const location = form.location.value;
    const title = form.title.value;
    const priceStartFrom = form.priceStart.value;
    const priceEndAt = form.priceEnd.value;
    const description = form.description.value;

    const agentName = user?.displayName;
    const agentImg = user?.photoURL;
    const agentEmail = user?.email;

    const image_url = await uploadImage(imageFile);

    const propertyData = {
      location,
      title,
      priceRangeStart: priceStartFrom,
      priceRangeEnd: priceEndAt,
      desc: description,
      image: image_url?.data?.display_url,
      agentName,
      agentImg,
      agentEmail,
      verificationStatus: "not verified",
      adv: "removeAds",
    };

    try {
      const data = await addProperty(propertyData);
      setUploadButtonText('Uploaded!');
      if (data.insertedId) {
        toast.success('Property Added!');
      }
      form.reset();
      navigate('/dashboard/added-properties');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Add Property</title>
      </Helmet>
      <Title name={`Add Property`}></Title>
      <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 dark:bg-slate-600">
        <form onSubmit={handleAddProperty}>
          <div className="grid grid-cols-1 gap-10">
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="location" className="block text-gray-600 dark:text-gray-200">
                  Location
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md dark:bg-zinc-200"
                  name="location"
                  id="location"
                  type="text"
                  placeholder="Location"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-600 dark:text-gray-200">
                  Title
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md dark:bg-zinc-200"
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Title"
                  required
                />
              </div>

              <div className="p-4 bg-white border border-blue-300 w-full m-auto rounded-lg">
                <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg dark:bg-zinc-200">
                  <div className="flex flex-col w-max mx-auto text-center">
                    <label>
                      <input
                        onChange={(e) => handleImageChange(e.target.files[0])}
                        className="text-sm cursor-pointer w-36 hidden"
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        hidden
                      />
                      <div className="bg-blue-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-500">
                        {uploadButtonText}
                      </div>
                    </label>
                  </div>
                </div>
                {imagePreview && (
                  <div className="mt-4">
                    <img src={imagePreview} alt="Uploaded Preview" className="w-10mx h-10 rounded-md" />
                    <button
                      type="button"
                      onClick={handleDeleteImage}
                      className="mt-2 bg-red-500 text-white p-2 rounded-md"
                    >
                      Delete Image
                    </button>
                  </div>
                )}
              </div>

              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="priceStart" className="block text-gray-600 dark:text-gray-200">
                    Price Start From
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md dark:bg-zinc-200"
                    name="priceStart"
                    id="priceStart"
                    type="number"
                    min={1}
                    placeholder="Price"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="priceEnd" className="block text-gray-600 dark:text-gray-200">
                    Price Ends At
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md dark:bg-zinc-200"
                    name="priceEnd"
                    id="priceEnd"
                    type="number"
                    placeholder="Price"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="description" className="block text-gray-600 dark:text-gray-200">
                  Description
                </label>
                <textarea
                  id="description"
                  className="block rounded-md focus:blue-300 w-full h-32 px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 dark:bg-zinc-200"
                  name="description"
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-6 mt-5 text-center font-medium shadow-md rounded-md border-2 border-slate-400 px-5 py-3 text-slate-400 transition duration-150 ease-in-out hover:bg-slate-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600 dark:text-gray-200 text-lg"
          >
            {isLoading ? (
              <TbLoader3 size={30} className="animate-spin m-auto" />
            ) : (
              'Add Property'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
