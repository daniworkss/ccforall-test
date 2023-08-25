import { useState } from "react"
import Link from "next/link"
import Socails from "./Socialmedias"
export default function Footer(){
    const [openLink, setopenLink ] = useState('')
    return(
      <>
        <div className=" footer-container bg-darknavyblue w-full pb-4 pt-8 flex flex-col laptop:flex-row-reverse laptop:justify-center  laptop:gap-[3rem]">
           <div className="laptop:flex laptop:justify-center">
            <div className="footer-links ">
                {/* for links */}
                <div className="pl-4 pr-4 laptop:pr-0  laptop:mr-8 flex flex-col cursor-pointer laptop:pt-8 "onClick={()=>setopenLink(!openLink)}>
                    <div className="flex items-center justify-between h-[50px]">
                     <h1 className="text-[24px]  font-semibold border-b-[2px] border-light-blue w-full pb-2 text-white">Useful Links</h1>
                     <div className ="pb-2 text-white text-[20px] tablet:text-[28px] laptop:hidden">
                     <ion-icon name={openLink ? 'arrow-dropup': 'arrow-dropdown'}></ion-icon>
                    </div>
                    </div>
                    <ul className={`flex-col flex text-[18px] tablet:text-[22px] mt-2 pr-2   overflow-y-hidden laptop:h-[340px]  text-white ${openLink ? 'h-[340px] transition-all duration-[.3s] ease-in' : 'h-0 transition-all duration-[.3s] ease-out'}`}>
                        <Link href={'/care-services'} className="border-b-[2px] border-light-blue pb-4"> Care services</Link>
                        <Link href={'/about-us'}  className="border-b-[2px] border-light-blue pb-4 mt-4"> About us</Link>
                        <Link href={'/useful-information'}  className="border-b-[2px] border-light-blue pb-4 mt-4"> Useful information</Link>
                        <Link href={'/news'}  className="border-b-[2px] border-light-blue pb-4 mt-4"> News </Link>
                        <Link href={'/contact-us'}  className="border-b-[2px] border-light-blue pb-4 mt-4"> Contact us</Link>
                    </ul>
                </div>
           </div>
              {/* for newsletter */}
              
              <div className="flex laptop:flex-row-reverse flex-col gap-[2rem] ">
                    <div className="w-full mt-6 flex flex-col items-center gap-[1rem]">
                    <h1 className="text-white text-[28px] font-semibold">Newsletter Sign up</h1>
                    <Link href={'/news-letter'} className="bg-light-blue hover:bg-white hover:text-darknavyblue transition-all duration-[.3s]  text-[20px] text-white w-[300px] h-[60px] rounded-[5px] font-semibold flex items-center justify-center">
                      Sign me up
                    </Link>
                    </div>
                    <div className="pl-4 pr-4">
                    <div className="footer-line h-[2px] laptop:h-[400px] laptop:w-[1px] bg-gray-200 opacity-[50%]  w-full"></div>
                    </div>
                      {/* for social media */}
                    <div className=" laptop:w-[180px] mt-8 flex justify-center  laptop:pt-0 ">
                      <Socails/>
                    </div>
                    <div className="pl-4 pr-4 laptop:pl-0">
                    <div className="footer-line h-[2px] bg-white  w-full"></div>
          </div>
                </div>
            </div>
            <div className="pl-4  hidden laptop:block">
                    <div className="footer-line h-[2px] laptop:h-[400px] laptop:w-[1px] bg-gray-200 opacity-[50%]  w-full"></div>
             </div>

            <div className="logo mt-8 h-[90px] bg-blue-200 w-full laptop:w-[30%]">
            <h1 className="text-[30px] text-center font-bold">LOGO HERE</h1>
           </div>
        </div>
       <div className="h-[40px] w-full bg-white text-center font-medium text-[20px] text-darknavyblue "> This is the test version of the site we can make corrections before hosting it fully</div>
      </>
    )
}