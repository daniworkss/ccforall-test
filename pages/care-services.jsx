import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Link from "next/link";
import Howtofind from "./components/Howtofindcare";
export default function Careservices(){

    return(
        <Layout>
            <div>
            <div className="about-hero careservices-page bg-darknavyblue ">
                    <div className="w-full pl-4 ">
                        <h1 className="hero-h1 text-white text-left w-full mb-3 laptop:text-center">Care <span className="text-light-blue">Services</span></h1>
                        <div className="laptop:pr-10 laptop:flex laptop:justify-center laptop:mt-8">
                            <div className="laptop:w-[70%]">
                             <p className="text-white text-left hero-p laptop:text-center">Working with clients and their families that require care in their homes is our area of expertise. With our one-of-a-kind service, we provide individualized care options ranging from check-in visits to full live-in support.</p>          
                            </div>
                        </div>
                    </div>
                </div>

{/* home support section */}
                <div className="body-container laptop:mt-4 laptop:mb-4">
                    <div className="laptop:w-full laptop:flex laptop:justify-center">
                    <p className="laptop:w-[60%] laptop:text-center">Working with clients and their families who require social care in their homes is our area of expertise. With our customised care visits, which range from check-in visits to complete live-in help, we provide a special service. Our success has been greatly influenced by our dedication to providing top-notch treatment. </p>      
                    </div>
                </div>
                
                <div className="body-container">
                    <h2 className="body-title text-left text-darknavyblue laptop:text-center mb-2">Home Care & <span className="text-light-blue">Support</span></h2>
                    <div className="laptop:w-full laptop:justify-center laptop:flex">
                    <p className="text-left  laptop:w-[60%] laptop:text-center">
                     We provide you the freedom to choose the home care services and assistance you need, wherever and whenever you need it. Because it concerns you, it must be done in your way.
                    </p>
                    </div>
                </div>
                {/* links to home support pages*/}
                <div className="body-container w-full laptop:flex laptop:justify-center">
                    <div className="flex flex-col laptop:flex-row flex-wrap items-center w-full laptop:w-[70%]  gap-[1.5rem]  laptop:justify-start laptop:ml-10 laptop:gap-[2rem]">

                        <Link href={'./home-support/home-care'} className="w-full laptop:w-[45%] flex justify-center laptop:justify-start">
                        {/* check global css for button animation */}
                            <button className=" support-page-link pl-4 pr-4 flex items-center w-[100%] justify-between  relative hover:text-white transition-colors duration-[.4s] ease-in text-darknavyblue text-[24px]  font-semibold">
                                    Home care
                                    <div className="text-">
                                   <ion-icon name="arrow-dropright-circle" className = 'mt-52'></ion-icon>          
                                    </div>
                            </button>
                        </Link>


                        <Link href={'./home-support/healthy-body-healthy-mind'} className="w-full laptop:w-[45%] flex justify-center">
                        {/* check global css for button animation */}
                            <button className=" support-page-link pl-3 pr-4 flex items-center w-[100%] justify-between  relative hover:text-white transition-colors duration-[.4s] ease-in text-darknavyblue text-[22px]  laptop:text-[24px] font-semibold">
                                    Healthy body, healthy mind
                                    <span className="text-[24px]">
                                     <ion-icon name="arrow-dropright-circle" className = 'mt-52'></ion-icon>
                                   </span>
                            </button>
                        </Link>

                        <Link href={'./home-support/mind-body-and-soul'} className="w-full  laptop:w-[45%] flex justify-center">
                        {/* check global css for button animation */}
                            <button className=" support-page-link pl-4 pr-4 flex items-center w-[100%] justify-between  relative hover:text-white transition-colors duration-[.4s] ease-in text-darknavyblue text-[24px] font-semibold">
                                    Mind, body and soul
                                <ion-icon name="arrow-dropright-circle" className = 'mt-52'></ion-icon>
                            </button>
                        </Link>


                        <Link href={'./home-support/extra-care'} className="w-full laptop:w-[45%] flex justify-center">
                        {/* check global css for button animation */}
                            <button className=" support-page-link pl-2 pr-4 flex items-center w-[100%] justify-between  relative hover:text-white transition-colors duration-[.4s] ease-in text-darknavyblue text-[22px] tablet:text-[24px] laptop:text-[24px] font-semibold">
                                    Extra care to live life your way
                                    <span className="text-[24px]">
                                <ion-icon name="arrow-dropright-circle" className = 'mt-52'></ion-icon>
                                    </span>
                            </button>
                        </Link>

                        <Link href={'./home-support/putting-you-first'} className="w-full laptop:w-[45%] flex justify-center">
                        {/* check global css for button animation */}
                            <button className=" support-page-link pl-4 pr-4 flex items-center w-[100%] justify-between  relative hover:text-white transition-colors duration-[.4s] ease-in text-darknavyblue text-[24px] font-semibold">
                                    Putting you first
                                <ion-icon name="arrow-dropright-circle" className = 'mt-52'></ion-icon>
                            </button>
                        </Link>

                       

                        <Link href={'./home-support/night-care'} className="w-full  laptop:w-[45%] flex justify-center">
                        {/* check global css for button animation */}
                            <button className=" support-page-link pl-4 pr-4 flex items-center w-[100%] justify-between  relative hover:text-white transition-colors duration-[.4s] ease-in text-darknavyblue text-[24px] font-semibold">
                                    Night care
                                <ion-icon name="arrow-dropright-circle" className = 'mt-52'></ion-icon>
                            </button>
                        </Link>
                    </div>
                   
                </div>
{/* specialist care section */}
                <div className="body-container laptop:mt-10 ">
                    <h2 className="body-title text-left text-darknavyblue laptop:text-center mb-2">Specialist <span className="text-light-blue">Care</span></h2>
                    <div className="laptop:w-full laptop:flex laptop:justify-center">
                    <p className="text-left laptop:w-[70%] laptop:text-center">
                        Specialist care services are necessary for some conditions. We are aware that individuals with particular requirements resulting from a disease or disability may require more care and support.
                    </p>
                    </div>
                </div>

                <div className="body-container w-full laptop:flex laptop:justify-center laptop:mb-[5rem]">
                    <div className="flex flex-wrap laptop:flex-row laptop:justify-center gap-[2rem] laptop:w-[70%]">
                        <Link href={'./specialist-care/learning-disablity'} className="w-full laptop:w-[45%] flex justify-center">
                                {/* check global css for button animation */}
                                    <button className=" support-page-link pl-4 pr-4 flex items-center w-[100%] justify-between  relative hover:text-white transition-colors duration-[.4s] ease-in text-darknavyblue text-[22px] tablet:text-[24px] font-semibold">
                                            Learning disabilities support
                                        <ion-icon name="arrow-dropright-circle" className = 'mt-52'></ion-icon>
                                    </button>   
                        </Link>

                        <Link href={'./specialist-care/dementia-care'} className="w-full laptop:w-[45%] flex justify-center">
                            {/* check global css for button animation */}
                                <button className=" support-page-link pl-4 pr-4 flex items-center w-[100%] justify-between  relative hover:text-white transition-colors duration-[.4s] ease-in text-darknavyblue text-[24px] font-semibold">
                                        Dementia care
                                    <ion-icon name="arrow-dropright-circle" className = 'mt-52'></ion-icon>
                                </button>   
                        </Link>

                        <Link href={'./specialist-care/physical-disabilities'} className="w-full flex laptop:w-[45%] justify-center">
                                {/* check global css for button animation */}
                                    <button className=" support-page-link pl-4 pr-4 flex items-center w-[100%] justify-between  relative hover:text-white transition-colors duration-[.4s] ease-in text-darknavyblue text-[24px] font-semibold">
                                            Physical disabilities care
                                        <ion-icon name="arrow-dropright-circle" className = 'mt-52'></ion-icon>
                                </button>   
                        </Link>
                        <Link href={'./specialist-care/end-of-life'} className="w-full laptop:w-[45%] flex justify-center">
                                {/* check global css for button animation */}
                                    <button className=" support-page-link pl-4 pr-4 flex items-center w-[100%] justify-between  relative hover:text-white transition-colors duration-[.4s] ease-in text-darknavyblue text-[24px] font-semibold">
                                            End of life care
                                        <ion-icon name="arrow-dropright-circle" className = 'mt-52'></ion-icon>
                                    </button>   
                        </Link>
                        <Link href={'./specialist-care/hypertension-care'} className="w-full laptop:w-[45%] flex justify-center">
                                {/* check global css for button animation */}
                                    <button className=" support-page-link pl-4 pr-4 flex items-center w-[100%] justify-between  relative hover:text-white transition-colors duration-[.4s] ease-in text-darknavyblue text-[24px] font-semibold">
                                            Hypertension care
                                        <ion-icon name="arrow-dropright-circle" className = 'mt-52'></ion-icon>
                                    </button>   
                        </Link>

                        <Link href={'./specialist-care/stroke-care'} className="w-full laptop:w-[45%] flex justify-center">
                                {/* check global css for button animation */}
                                <button className=" support-page-link pl-4 pr-4 flex items-center w-[100%] justify-between  relative hover:text-white transition-colors duration-[.4s] ease-in text-darknavyblue text-[24px] font-semibold">
                                        Stroke care
                                    <ion-icon name="arrow-dropright-circle" className = 'mt-52'></ion-icon>
                                </button>   
                        </Link>

                    </div>
          
                </div>

{/* for how to find */}
                  <Howtofind/>
            </div>
            <Footer/>
        </Layout>
    )
}