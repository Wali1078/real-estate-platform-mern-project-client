import { GrUserManager } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import MenuWrapper from "../MenuWrapper/MenuWrapper";

const AdminMenu = () => {
  return (
    <>
      <MenuWrapper
        icon={GrUserManager}
        label={`Manage Properties`}
        address={`/dashboard/manage-properties`}
      ></MenuWrapper>
      <MenuWrapper
        icon={FaUsers}
        label={`Manage Users`}
        address={`/dashboard/manage-users`}
      ></MenuWrapper>
      <MenuWrapper
        icon={MdRateReview}
        label={`Manage Reviews`}
        address={`/dashboard/manage-reviews`}
      ></MenuWrapper>
    </>
  );
};

export default AdminMenu;
