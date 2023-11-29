import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { getUserWishlistProperties } from "../../../../api/properties";
import { Helmet } from "react-helmet-async";
import Title from "../../../../components/Title/Title";
import WishListCard from "../WishList/WishListCard";

const PropertyBought = () => {
 const isPropertyBought =true

    const { user, loading } = useAuth();

    const { data: myWishlists = [], isLoading } = useQuery({
      enabled: !loading && !!user?.email,
      queryKey: ["myWishlists"],
      queryFn: async () =>await getUserWishlistProperties(user?.email),
    });
    console.log(myWishlists);
    return (
      <div>
      <Helmet>
        <title>Property Bought</title>
      </Helmet>
      <Title name={`Property Bought`}/>
      
      <div className="grid lg:grid-cols-3 gap-4">
        {
          myWishlists?.map(wish=><WishListCard key={wish._id} wishlist={wish} isPropertyBought={isPropertyBought}/>)
        }
      </div>
      {myWishlists.length === 0 && <p className="text-center flex items-center text-2xl justify-center h-[80vh]">No Data Available</p>}

    </div>
  )
}

export default PropertyBought