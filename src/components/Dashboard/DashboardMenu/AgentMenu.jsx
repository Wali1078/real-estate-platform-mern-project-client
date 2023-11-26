import { MdLibraryAddCheck, MdOutlinePostAdd } from "react-icons/md";
import MenuWrapper from "../MenuWrapper/MenuWrapper";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { BiExport } from "react-icons/bi";

const AgentMenu = () => {
  return (
    <>
      <MenuWrapper
        icon={MdOutlinePostAdd }
        label={`Add Property`}
        address={`/dashboard/add-property`}
      ></MenuWrapper>
      <MenuWrapper
        icon={MdLibraryAddCheck }
        label={`Added Properties`}
        address={`/dashboard/added-properties`}
      ></MenuWrapper>
      <MenuWrapper
        icon={BiExport }
        label={`Sold Properties`}
        address={`/dashboard/sold-properties`}
      ></MenuWrapper>
      <MenuWrapper
        icon={VscGitPullRequestGoToChanges }
        label={`Requested Properties`}
        address={`/dashboard/requested-properties`}
      ></MenuWrapper>
    </>
  );
};

export default AgentMenu;
