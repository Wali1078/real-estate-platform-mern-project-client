import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from "../../../assets/banner-img/new07.jpg"
import img2 from "../../../assets/banner-img/new05.jpg"
import img3 from "../../../assets/banner-img/new04.jpg"
import img4 from "../../../assets/banner-img/new03.jpg"
import img5 from "../../../assets/banner-img/new02.jpg"
import img6 from "../../../assets/banner-img/new01.jpg"

const Banner = () => {
  return (
    <div className="">
      <Carousel autoPlay={true} autoPlaySpeed={5000} infiniteLoop={true}>
        <div className="h-[80vh]">
          <img className="object-cover w-full h-full" src={img6} />
        </div>
        <div className="h-[80vh]">
          <img className="object-cover w-full h-full" src={img5} />
        </div>
        <div className="h-[80vh]">
          <img className="object-cover w-full h-full" src={img4} />
        </div>
        <div className="h-[80vh]">
          <img className="object-cover w-full h-full" src={img3} />
        </div>
        <div className="h-[80vh]">
          <img className="object-cover w-full h-full" src={img2} />
        </div>
        <div className="h-[80vh]">
          <img className="object-cover w-full h-full" src={img1} />
        </div>
      </Carousel>
    </div>
  )
}

export default Banner