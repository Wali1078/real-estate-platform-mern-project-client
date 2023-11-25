import AdvertisementCard from "../AdvertisementCard/AdvertisementCard"

const Advertisement = () => {
  return (
    <div>
         <h1 className="text-6xl text-center">Adv</h1>
        <div className="grid lg:grid-cols-4  gap-4 mx-auto">
        <AdvertisementCard/>
        <AdvertisementCard/>
        <AdvertisementCard/>
        <AdvertisementCard/>

        </div>
    </div>
  )
}

export default Advertisement