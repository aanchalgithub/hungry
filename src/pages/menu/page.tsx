import React, { useState } from "react";
import HamburgerMenu from "../../Components/Sidebar/HamburgerMenu";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MobileMenu from "../../Components/Menu/MobileMenu";
import KitchenCard from "../../Components/Home/KitchenCard";
// import storeReducer from "../../Redux/features/store/storeReducer"
import { useDispatch, useSelector } from "react-redux";
import { SETALLSTORE } from "../../Redux/features/store/storeAction";

export default function Menu() {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    sidebar ? setSidebar(false) : setSidebar(true);
  };
  const dispatch = useDispatch()
  const {storeData : {allStore}} = useSelector((state : any)=> state)
  const data = useSelector((state : any)=> state)
  console.log(allStore,'checking allStore data in store');
  console.log(data);
  
  const onHandleStoreData = () =>{
    dispatch(SETALLSTORE(["Aanchal","Soni"]))
  }
  return (
    <>
      <div
        className={`${
          sidebar ? "left-0" : "left-[-30rem]"
        } md:hidden block absolute h-screen w-screen transition-all z-[51] bg-white`}
      >
        <HamburgerMenu handleSidebar={handleSidebar} />
      </div>

      <div className="flex pt-16 overflow-hidden relative">
        <div className="sideBarWrapper md:block hidden">
        <Sidebar />

        </div>
        <div className="h-[calc(100vh-4rem)] overflow-y-auto scroll-hidden bg-[#F3F5FA] w-full">
            <div className="store-banner md:relative static">
                <div className="md:absolute static md:top-[8rem] md:left-2/4 md:translate-x-[-50%] md:translate-y-[-50%]">
                        <KitchenCard 
                        className="menu"
                        />
                </div>
            </div>
            <MobileMenu />
            <div className="centerSiteContent md:pt-16 pt-0">
                <button className="btn btn-success" onClick={onHandleStoreData}>Store Data</button>
            </div>
        </div>
      </div>
    </>
  );
}
