
import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";
import errorAnimation from "../../assets/animations/Animation - 1700843263152.json"
import { Button } from "@mui/material";

export default function ErrorPage() {
  const error = useRouteError();
  //   console.error(error);
 

  return (
    <div
      id="error-page"
      className="min-h-[100vh] flex justify-center items-center text-center font-bold text-2xl custom_class flex-col md:flex-row px-10 "
    >
    <div className="w-1/2">
    <Lottie animationData={errorAnimation} loop={true} />
    </div>
      <div>
        {error.status === 404 || (
          <div className="text-black">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="mb-8">
              <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">
            <Button size="medium" variant="contained">
                Go Back to Home
              </Button>
            </Link>
          </div>
        )}
        {error.status === 404 && (
          <div className="text-black">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <h3>404 page {error.statusText || error.message}</h3>
            <p className="mt-8"></p>
            <Link to="/">
            <Button size="medium" variant="contained">
                Go Back to Home
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
