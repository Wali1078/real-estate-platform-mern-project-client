import { Helmet } from "react-helmet-async"
import Banner from "../../components/Shared/Banner"
import MyContainer from "../../components/Shared/MyContainer"
import Title from "../../components/Title/Title"
import { useLoaderData } from "react-router-dom"
import SinglePropertyCard from "../../components/Home/SinglePropertyCard/SinglePropertyCard"
import Footer from "../../components/Home/Footer/Footer"


const PropertyDetails = () => {

const data = useLoaderData()
console.log(data);

  return (
    <MyContainer>
    <Helmet>
        <title>Dream🏚️ | Property</title>
      </Helmet>
        <Banner link={"https://i.ibb.co/gvT5XYX/pexels-pixabay-277667.jpg"}/>

        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-[80vw]  md:w-[50vw] bg-slate-400">
        <Title name={`View Property Details Here`}></Title>
   </div>

        <Title name={`Property Details `}></Title>
        <div>
       
          <SinglePropertyCard property={data} />
    
     
        </div>
        <Footer/>
    </MyContainer>
  )
}

export default PropertyDetails