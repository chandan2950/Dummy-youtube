import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch=useDispatch();

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu())
    };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
        onClick={()=>toggleMenuHandler()}
        className="h-8 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8P50JewhnwV_4mddblGEk-EdG_Hs8JiyNbwEx3XA_UYVti0eqkXSy2xGgIyIZTx2GtE&usqp=CAU"
          alt="sidebar"
        />
        <img
        className="h-8 mx-2"
          src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
          alt="ytube image"
        />
      </div>
      <div className="col-span-10 mx-20">
        <input className="w-1/2 border border-grey-400 p-2 rounded-l-full" type="text" />
        <button className="border border-grey-400 p-2 rounded-r-full bg-grey-300">search</button>
      </div>
      <div className="col-span-1">
        <img
        className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/008/302/462/original/eps10-grey-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
