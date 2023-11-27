
const Banner = () => {
  return (
 
          <div className="relative">
        {/* banner */}
        <img
          className="h-[100vh] w-full"
          src="https://i.ibb.co/pjt5nJY/pexels-pixabay-262405.jpg"
          alt=""
        />
        {/* overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      </div>
  
  )
}

export default Banner