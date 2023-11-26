import MenuWrapper from "../../Dashboard/MenuWrapper/MenuWrapper";
import { BsGraphUp } from "react-icons/bs";

const AgentMenu = () => {
  return (
    <>
      <MenuWrapper
        icon={BsGraphUp}
        label={`Add Property`}
        address={`/dashboard/add-property`}
      ></MenuWrapper>
      <MenuWrapper
        icon={BsGraphUp}
        label={`Added Properties`}
        address={`/dashboard/added-properties`}
      ></MenuWrapper>
      <MenuWrapper
        icon={BsGraphUp}
        label={`Sold Properties`}
        address={`/dashboard/sold-properties`}
      ></MenuWrapper>
      <MenuWrapper
        icon={BsGraphUp}
        label={`Requested Properties`}
        address={`/dashboard/requested-properties`}
      ></MenuWrapper>
    </>
  );
};

export default AgentMenu;
