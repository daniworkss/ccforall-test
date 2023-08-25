import Layout from "../components/Layout"
import Howtofind from "../components/Howtofindcare"
import Footer from "../components/Footer"
import Image from "next/image"
const image = ''
export default function Mindpage (){
    return( 
        <Layout>
        {/* hero-section */}
        <div className="extrapage-hero mindbody-page">
        <h1 className="hero-h1 text-center text-[24px] mt-8 ">Mind , Body And Soul</h1>
        </div>
        <div className="flex general-body flex-wrap laptop:flex-nowrap laptop:item-center  laptop:items-center laptop:pl-4 laptop:pr-4 laptop:mb-[2rem] pt-8 pb-8 laptop:justify-between laptop:flex-row-reverse laptop:mt-8">
           <div className="laptop:flex laptop:justify-center pl-4 laptop:flex-col laptop:w-[60%]">
           <h2 className=" laptop:text-[26px] text-[24px] font-semibold text-light-blue laptop:mb-4">Staying Healthy and Promoting Home Independence</h2>
           <p className=" laptop:mt-0 laptop:w-[100%] laptop:text-[24px]  mb-4 laptop:mb-7">To maintain high mental and physical fitness at any age, it's crucial to be healthy and fit. Our care assistants can assist and get involved as part of the homecare plan if a client has the desire and capacity to partake in neighborhood activities. Or perhaps a client needs assistance performing some straightforward tasks at home.</p>     
           </div>
           {/* for image */}
           <div className="w-full laptop:w-[60%] flex  mt-8 laptop:mt-0 justify-center pl-4 pr-4">
            <Image src = {"/images/care-services-image2.jpg"}
              width={700}
              height={800}
              loading="lazy"
            />
              
           </div>

        </div>
        {/* main-section */}
        <div className="body-container laptop:flex laptop:justify-center mb-[5rem] laptop:mb-[2rem]">
            <div className="extrapage-texts">
            <p className="mb-4">People watch television alone far too frequently while they are seated. We think that providing our consumers with brainteasers, puzzles, and games will help them stay more attentive and enjoy their life.</p>
            <p className="mb-4">According to research, our brains can learn just as much in the second half of life as they do in the first. Simple activities like crossword puzzles, card games, Sudoku, tic-tac-toe, and scrabble can continue to exercise the brain. We may maintain our minds active and able to perform at a better level by choosing to engage in some brain exercises several times a week. Sometimes all we need to try new things or go back to old ones is a little bit of motivation or someone to interact with. Never too late to try!</p>
            <p className="mb-4">As part of your homecare, we develop a care and support plan with you that may include leisurely periods of stimulation.</p>
            </div>
            
        </div>
        <Howtofind/>
        <Footer/>
       </Layout>
    )
}