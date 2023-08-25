import Layout from "./components/Layout"
import Footer from "./components/Footer"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import Howtofind from "./components/Howtofindcare"
import Contactcomponent from "./components/contact-component"
export default function Homepage(){
  const [accordion1 , setAccordion1] = useState()
  const [accordion2, setAccordion2] = useState()
  const handleHeight = ()=>{
    if (accordion1 || accordion2 === 'clicked'){
      document.querySelector('.accordion-container').classList.add = 'h-[400px]'
    }else(
      document.querySelector('.accordion-container').classList.add = 'h-[150px]'
    )
  }
 
    return(
      
        <Layout>
        <div className="home-container w-full h-screen bg-white">
         <div className=" hero-section  ">
            <div className="mt-[4rem] flex flex-col pl-3 pr-2 gap-2  tablet:w-full laptop:justify-center laptop:gap-0">
             <h2 className="text-white font-semibold tablet:text-[28px] tablet:text-center text-left">Welcome to </h2>
             <h1 className="text-white home-hero-h1 font-bold  mb-2 w-[400px]  tablet:text-center tablet:w-full">Compassionate Care For All <span className="text-light-blue">Limited</span></h1>
             <div className="tablet:w-full w-[350px]">
             <p className="text-white w-full mb-2   tablet:text-center  tablet:text-[20px] laptop:text-[24px] ">Lets Provide You The Highest Quality Of Home Care.</p>
             </div>
               {/* add link here and animation */}
            <div className="w-full flex justify-start tablet:justify-center mt-2 ">
             <Link href={'/about-us'} className="hover:bg-white hover:text-darknavyblue w-[150px]  laptop:w-[300px] laptop:h-[60px] bg-light-blue text-white transition-colors duration-200  h-[45px] rounded-[05px] cursor-pointer font-semibold text-[14px] flex items-center justify-center laptop:text-[20px]">Who Are We ?</Link>

            </div>
            </div>
        </div>
        {/* about-section */}
        <div className="about-section general-body bg-darknavyblue w-full pb-2 laptop:mt-8  pt-10 pl-2 pr-2 flex flex-col laptop:flex-row gap-8 laptop:pl-8 laptop:pr-0 laptop:pt-0 laptop:items-center laptop:gap-0">
          <div className=" about-text laptop:w-[100%] ">
            <h1 className="body-title font-sans font-semibold text-white mb-[1.5rem] laptop:text-5xl laptop:leading-[3.5rem] tablet:text-center laptop:text-left tablet:pl-4 tablet:pr-4 laptop:w-[80%] laptop:pl-0 laptop:pr-0">Compassionate Care provides high quality care visits at home</h1>
            <p className="text-white mb-[1rem] laptop:text-[18px] laptop:pr-8  laptop:pl-0 tablet:pl-4 tablet:pr-4">We are dedicated to assisting you in upholding the lifestyle you prefer. Thus, we empower you to maintain control while offering tailored home care and support according to your desires, wherever and whenever you require it.</p>
            {/* add link to about us here too.. */}
            <Link href={'/about-us'} className="underline text-light-blue text-[18px] tablet:pl-4 laptop:pl-0 laptop:text-[24px]">Find out more about us</Link>
          </div>
          <div className="w-full laptop:w-[100%] flex  mt-8 laptop:mt-0 justify-center laptop:justify-end pl-4 pr-4 laptop:pr-0">
          <Image 
            src={'/images/homepage-img1.jpg'}
            width={750}
            height={500}
            loading="lazy"
           />
          </div>
          
        </div>

        {/* services section */}
        <div className="laptop:flex laptop:w-full laptop:justify-center ">
        <div className="services-section pl-4 pr-4 laptop:pl-8 laptop:w-[50%] pt-[2rem]  h-[300px] flex flex-col justify-center mb-4  ">
        <h1 className="font-bold text-light-blue mb-4 laptop:text-[48px] tablet:text-[40px] laptop:text-center">Services</h1>
        <p className="text-darknavyblue mb-3 laptop:text-[20px]">Our expertise lies in serving customers and their families who seek in-home care. We provide a distinctive range of personalized care solutions, ranging from occasional check-in visits to comprehensive live-in support.</p>
         {/* link to service-page */}
         <div className="w-full flex justify-start items-center">
          <Link href={'/care-services'}  className="flex items-center gap-[2px] hover:font-semibold transition-all duration-[.5s] ease-in underline text-light-blue text-[18px] laptop:text-[20px] font-[400]">
            Go to services page
         <span className="mt-[8px] "><ion-icon name="arrow-forward"></ion-icon></span>
         </Link>
          </div>
        </div>
        </div>
       
        {/* accordion section */}

        <div className="accordion-container general-body mt-12 flex flex-col laptop:justify-center laptop:pl-8 laptop:pr-8  gap-8 laptop:flex-row items-center mb-[3rem] laptop:items-start" onClick={handleHeight}>
            <div className="accordions  w-[95%]  laptop:w-[45%]">
               <div className="">
                <h1 className="text-white pb-3 bg-darknavyblue pl-4 pr-4 text-center font-semibold pt-4 text-[32px]">Home care & support</h1>
                 <p className="pl-4 pr-4 pt-4 text-[20px]" >We provide you the freedom to choose the home care services and assistance you need, wherever and whenever you need it. Because it concerns you, it must be done in your way.</p>
                 
                 <div className={`pl-4 pr-4 overflow-y-hidden ${ accordion1 ? 'h-[260px] transition-all duration-[.3s] ease-in' : 'h-0 transition-all duration-[.3s] ease-in' } flex items-center`} >
                   <ul className="text-light-blue underline text-[18px] pb-4 pt-4 gap-2 flex flex-col">
                    <Link href={'./home-support/extra-care'}>Extra care</Link>
                    <Link href={'./home-support/healthy-body-healthy-mind'}> Healthy body healthy mind</Link>
                    <Link href={'./home-support/home-care'} >Home care</Link>
                    <Link href={'./home-support/mind-body-and-soul'} >Mind body and soul</Link>
                    <Link href={'./home-support/night-care'} >Night care</Link>
                    <Link href={'./home-support/putting-you-first'} >Putting you first</Link>
                   </ul>
                 </div>
                 {/* for toggle-btn */}
                 <div className="bg-gray-100 w-full h-[60px] flex justify-center items-center text-[40px] text-light-blue cursor-pointer" onClick={()=> setAccordion1(!accordion1)}>
                     <ion-icon name={`${accordion1 ? 'remove-circle' : 'add-circle'}`}></ion-icon>
                 </div>
               </div>
            </div>

            {/* for second-accordion */}

            <div className="accordions  w-[95%]  laptop:w-[45%] ">
               <div>
                <h1 className="text-white pb-3 bg-darknavyblue pl-4 pr-4 text-center font-semibold pt-4 text-[32px]">Specialist care</h1>
                 <p className="pl-4 pr-4 pt-4 text-[20px]" >We provide you the freedom to choose the home care services and assistance you need, wherever and whenever you need it. Because it concerns you, it must be done in your way.</p>
                 
                 <div className={`pl-4 pr-4 overflow-y-hidden ${ accordion2 ? 'h-[260px] transition-all duration-[.3s] ease-in' : 'h-0 transition-all duration-[.3s] ease-in' } flex items-center`} >
                   <ul className="text-light-blue underline text-[18px] pb-4 pt-4 gap-2 flex flex-col">
                    <Link href={'./specialist-care/dementia-care'}>Dementia care</Link>
                    <Link href={'./specialist-care/end-of-life'}>End of life care</Link>
                    <Link href={'./specialist-care/hypertension-care'} >Hypertension care</Link>
                    <Link href={'./specialist-care/learning-disablity'} >Learning Disabilities</Link>
                    <Link href={'./specialist-care/physical-disabilities'} >Physical disabilities</Link>
                    <Link href={'./specialist-care/stroke-care'} >Stroke care</Link>
                   </ul>
                 </div>
                 {/* for toggle-btn */}
                 <div className="bg-gray-100 w-full h-[60px] flex justify-center items-center text-[40px] text-light-blue cursor-pointer" onClick={()=> setAccordion2(!accordion2)}>
                     <ion-icon name={`${accordion2 ? 'remove-circle' : 'add-circle'}`}></ion-icon>
                 </div>
               </div>
            </div>

        </div>
        
        <Howtofind/>
      <Footer/>
          
       </div>
        </Layout>
  
    )
}