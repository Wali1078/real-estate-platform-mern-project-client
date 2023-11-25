import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from "../../../assets/banner-img/01.jpg"
import img2 from "../../../assets/banner-img/02.jpg"
import img3 from "../../../assets/banner-img/03.jpg"
import img4 from "../../../assets/banner-img/04.jpg"
import img5 from "../../../assets/banner-img/05.jpg"
import img6 from "../../../assets/banner-img/06.jpg"

const Banner = () => {
  return (
    <div   className="">
           <Carousel>
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