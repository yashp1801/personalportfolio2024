import React from "react";
import Img from "../assets/images/homebgimg.jpg";

const BgImg = () => {
  return (
    <div className="h-screen w-full overflow-hidden  " >
      <div className="w-full h-full" >
        <img src={Img} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default BgImg;
