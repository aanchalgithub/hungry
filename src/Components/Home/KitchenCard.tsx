import React from 'react'

export default function KitchenCard({
    // kitchenName,
  className,

} : {
    // kitchenName : string
  className: string;

}) {
  return (
   <>
        <div className={`store-card  ${className}`}>
            <div className="groupRow">
                <div className="nameGroup">
                    <div className="flexBox justifyBetween">
                    <h4>{"kitchen card"}</h4>
                    </div>
                </div>
                <p className="text-[#828282] textSm font-normal mb-1"> 

                </p>
                <div className="flex  textSm font-normal gap-1 items-center mb-2">

                </div>
                <p className="flex  textSm font-normal gap-1 md:items-center mb-2 ">

                </p>
                <div className="flex justify-between flex-wrap  gap-4">

                </div>
            </div>
        </div>
   </>
  )
}
