import { FcGoogle } from "react-icons/fc";

const SocialSignIn = () => {
  return (
    <div className="flex justify-center items-center space-x-2 border p-2 mt-2  border-gray-300 border-rounded cursor-pointer">
      <FcGoogle size={32} />

      <p>Continue with Google</p>
    </div>
  );
};

export default SocialSignIn;
