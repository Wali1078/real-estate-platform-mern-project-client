import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { getWishlistProperties } from "../../../../api/properties";
import useAuth from "../../../../hooks/useAuth";
import WishListCard from "./WishListCard";
import Title from "../../../../components/Title/Title";

const WishList = () => {
  const { user, loading } = useAuth();
const isWishlist = true
  const { data: wishlists = [], isLoading,refetch } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["wishlists"],
    queryFn: async () =>await getWishlistProperties(user?.email),
  });
  console.log(wishlists);
  return (
    <div>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <Title name={`Wishlist`}/>
      
      <div className="grid lg:grid-cols-3 gap-4">
        {
          wishlists?.map(wish=><WishListCard key={wish._id} wishlist={wish} refetch={refetch} isWishlist={isWishlist}/>)
        }
      </div>
    </div>
  );
};

export default WishList;
