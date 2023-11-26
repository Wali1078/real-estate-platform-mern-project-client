import { BsGraphUp } from "react-icons/bs";
import MenuWrapper from "../../Dashboard/MenuWrapper/MenuWrapper";

const AdminMenu = () => {
  return (
    <>
      <MenuWrapper
        icon={BsGraphUp}
        label={`Manage Properties`}
        address={`/dashboard/manage-properties`}
      ></MenuWrapper>
      <MenuWrapper
        icon={BsGraphUp}
        label={`Manage Users`}
        address={`/dashboard/manage-users`}
      ></MenuWrapper>
      <MenuWrapper
        icon={BsGraphUp}
        label={`Manage Reviews`}
        address={`/dashboard/manage-reviews`}
      ></MenuWrapper>
    </>
  );
};

export default AdminMenu;
