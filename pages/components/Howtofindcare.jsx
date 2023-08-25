import Link from "next/link"
import Contactcomponent from "./contact-component"
export default function Howtofind(){
return(
    <>
     
{/* for how to find care */}
  <div className="body-container laptop:w-full flex justify-center laptop:h-[600px] laptop:mb-[3rem] mb-[1rem]">
                    <div className="how-tofind pt-8 laptop:w-[80%] laptop:pt-[3rem]">
                        <h2 className="text-[30px] laptop:text-[40px] text-center text-darknavyblue font-semibold laptop:mb-14">How To Find The Right Care For You Or Your Relative</h2>
                        <div className="how-to-find-content flex flex-col laptop:flex-row laptop:items-center laptop:gap-[0rem] gap-[2rem] justify-center">
                            
                            <div className=" box flex flex-col items-center mt-8 laptop:mt-0 laptop:w-full">
                                <div className="bg-light-blue w-[80px] h-[80px] text-[40px] text-white flex justify-center items-center rounded-[50%]">
                                <ion-icon name="call"></ion-icon>
                                </div>
                                <Link href={'/'} className="hover:underline text-[24px] font-semibold text-darknavyblue mt-4 mb-2">
                                    Contact Us
                                </Link>
                                <div className="flex justify-center">
                                <p className="w-[95%] text-center">
                                   Give us a call to find out how we can help you
                                </p>
                                </div>
                                
                            </div>
                            {/* line */}
                            <div className="flex justify-center"> 
                            <div className="line bg-light-blue w-[2px] h-[50px] laptop:w-[50px] laptop:h-[2px]"></div>
                            </div>

                            <div className=" box flex flex-col items-center laptop:w-full">
                                <div className="bg-light-blue w-[80px] h-[80px] text-[40px] text-white flex justify-center items-center rounded-[50%]">
                                <ion-icon name="list-box"></ion-icon>
                                </div>
                                <h2 className="text-[24px] font-semibold text-darknavyblue mt-4 mb-2 ">
                                    Assessments
                                </h2>
                               <div className="flex justify-center w-full">
                                    <p className="text-center w-[95%]">
                                        We'll visit you to determine what you or a loved one needs in order to maintain independence at home.
                                        </p>
                               </div>
                                
                            </div>

                              {/* line */}
                            <div className="flex justify-center"> 
                            <div className="line bg-light-blue w-[2px] h-[50px] laptop:w-[50px] laptop:h-[2px]"></div>
                            </div>

                            <div className=" box flex flex-col items-center laptop:w-full">
                                <div className="bg-light-blue w-[80px] h-[80px] text-[40px] text-white flex justify-center items-center rounded-[50%]">
                                <ion-icon name="contact"></ion-icon>
                                </div>
                                <h2 href={'/'} className="text-[24px] font-semibold text-darknavyblue mt-4 mb-2 ">
                                    Team Chosen & Care Starts
                                </h2>
                                <div className="w-full flex justify-center">
                                <p className="w-[95%] text-center">
                                Our carefully trained staff will take care of you in order to help you stay at home as long as possible.
                                </p>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                  </div>

                  <Contactcomponent/>
    </>
)
}