import { Helmet } from "react-helmet-async"
import Title from "../../../../components/Title/Title"
import useProperties from "../../../../hooks/useProperties";
import AdvertisePropDataRow from "../../../../components/TableDataRow/AdvertisePropDataRow";


const AdvertiseProperty = () => {

  const [properties, isLoading,refetch] = useProperties();
  const removeRejectedProperties = properties?.filter(prop=>prop.verificationStatus==="verified");
  // console.log(removeRejectedProperties);
  const totalAdvCount = removeRejectedProperties?.filter(item=>item.adv==="addAds")
  // console.log(totalAdvCount.length);
const totalAds = totalAdvCount.length
  return (
    <div className="container mx-auto px-4 sm:px-8">
    <Helmet>
      <title>Advertise Property</title>
    </Helmet>
    <Title name={`Advertise Property`}></Title>
    <div className="py-8">
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                Property Image
                </th>
                <th scope="col" className="px-6 py-3">
              Property Title
                </th>
                <th scope="col" className="px-6 py-3">
                 Price Starts From
                </th>
                <th scope="col" className="px-6 py-3">
                Price Ends At
                </th>
                <th scope="col" className="px-6 py-3">
                 Agent Name
                </th>
                <th scope="col" className="px-6 py-3">
                Add Adv.
                </th>
                <th scope="col" className="px-6 py-3">
                Remove Adv.
                </th>
              </tr>
            </thead>
            <tbody>
              {removeRejectedProperties &&
                removeRejectedProperties?.map((prop,idx) => (
                  <AdvertisePropDataRow key={prop._id} idx={idx} prop={prop} refetch={refetch} totalAds={totalAds}/>
                ))} 
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdvertiseProperty