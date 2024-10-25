import Header from "../Components/Header/Header"

export const MainWrapper = ({children} : {children : any}) =>{
    return(
        <>
            <div className="topheader hidden md:block">
                <div className="pageHeader">
                    <Header />
                </div>
            </div>
            <div className=" md:pt-[4.15rem]">{children}</div>
        </>
    )
}