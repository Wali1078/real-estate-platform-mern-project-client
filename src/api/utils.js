import axios from "axios";

export const imageUpload = async (imageFile) => {
  const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const { data } = await axios.post(image_hosting_api, imageFile, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  return data;
};
