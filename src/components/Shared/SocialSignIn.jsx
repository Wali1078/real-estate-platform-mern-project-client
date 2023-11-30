import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { getToken, saveUser } from "../../api/auth";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocialSignIn = () => {
  const {  signInWithGoogle } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
   // Handle Social SignIn
  const handleSocialSignIn = async (media) => {
    const toastId = toast.loading("Signing in ...");
  try {
    //2. User Registration using google
    const result = await media()

    //4. save user data in database
    const dbResponse = await saveUser(result?.user)
    console.log(dbResponse)

    //5. get token
    await getToken(result?.user?.email)
    navigate(from, { replace: true })
    toast.success('Login Successful', { id: toastId })
  } catch (err) {
    // console.log(err)
    toast.error(err?.message, { id: toastId })
  }
}

  return (
    <div onClick={()=>handleSocialSignIn(signInWithGoogle)} className="flex justify-center items-center space-x-2 border p-2 mt-4  border-gray-300 border-rounded cursor-pointer">
      <FcGoogle size={32} />

      <p>Continue with Google</p>
    </div>
  );
};

export default SocialSignIn;
