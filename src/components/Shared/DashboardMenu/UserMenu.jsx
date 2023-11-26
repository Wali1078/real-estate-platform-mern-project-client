import { BsGraphUp } from "react-icons/bs";
import MenuWrapper from "../../Dashboard/MenuWrapper/MenuWrapper";

const UserMenu = () => {
  return (
    <>
      <MenuWrapper
        icon={BsGraphUp}
        label={`Wishlist`}
        address={`/dashboard/wishlist`}
      ></MenuWrapper>
      <MenuWrapper
        icon={BsGraphUp}
        label={`Property Bought`}
        address={`/dashboard/property-bought`}
      ></MenuWrapper>
      <MenuWrapper
        icon={BsGraphUp}
        label={`My Reviews`}
        address={`/dashboard/my-reviews`}
      ></MenuWrapper>
    </>
  );
};

export default UserMenu;
