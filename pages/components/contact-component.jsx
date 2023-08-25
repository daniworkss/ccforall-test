export default function Contactcomponent(){
    return(
        <>
    {/* add map here */}
        <div className="map-container general-body h-[550px] bg-light-blue flex-col laptop:flex-row-reverse items-center gap-6 flex pb-4 pt-4  ">
           <h1 className="body-title pt-6 laptop:pt-0 text-white text-center laptop:w-full ">Find Care Near You</h1>
            
            <div className="w-[95%] laptop:w-[100%] h-[550px] bg-white flex justify-center items-center">
            <h1 className="">Map goes here</h1>
            </div>


            

        </div>
        </>
    )
}