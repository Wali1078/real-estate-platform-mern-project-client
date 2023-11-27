
const Banner = ({link}) => {
  return (
 
          <div className="relative">
        {/* banner */}
        <img
          className="h-[100vh] w-full"
          src={link}
          alt=""
        />
        {/* overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      </div>
  
  )
}

export default Banner