import MenuWrapper from "../MenuWrapper/MenuWrapper";
import { MdOutlineAddBusiness, MdOutlineRateReview } from "react-icons/md";
import { FaHeartCirclePlus } from "react-icons/fa6";

const UserMenu = () => {
  return (
    <>
      <MenuWrapper
        icon={FaHeartCirclePlus }
        label={`Wishlist`}
        address={`/dashboard/wishlist`}
      ></MenuWrapper>
      <MenuWrapper
        icon={MdOutlineAddBusiness }
        label={`Property Bought`}
        address={`/dashboard/property-bought`}
      ></MenuWrapper>
      <MenuWrapper
        icon={MdOutlineRateReview }
        label={`My Reviews`}
        address={`/dashboard/my-reviews`}
      ></MenuWrapper>
    </>
  );
};

export default UserMenu;
