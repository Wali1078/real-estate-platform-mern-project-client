import { RotatingTriangles } from  'react-loader-spinner'

const Loader = () => {
  return (
    <div
      className="h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center "
    >
      <RotatingTriangles
  visible={true}
  height="80"
  width="80"
  ariaLabel="rotating-triangels-loading"
  wrapperStyle={{}}
  wrapperClass="rotating-triangels-wrapper"
/>
    </div>
  );
};

export default Loader;
