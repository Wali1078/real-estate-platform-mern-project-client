
const SoldPropertyDataRow = ({idx,data,refetch}) => {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {idx + 1}
    </th>
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {data?.title}
    </th>
    <td className="px-6 py-4">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data?.location}
      </th>
    </td>
    <td className="px-6 py-4">{data?.userEmail}</td>
    <td className="px-6 py-4">{data?.userName}</td>
    <td className="px-6 py-4">{data?.offerPrice}</td>
    <td className="px-6 py-4 capitalize">{data?.buyingDate}</td>
    <td className="px-6 py-4 capitalize">{data?.transactionId}</td>
   
  </tr>
  )
}

export default SoldPropertyDataRow