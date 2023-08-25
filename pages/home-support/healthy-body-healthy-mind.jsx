import Layout from "../components/Layout"
import Footer from "../components/Footer"
import Howtofind from "../components/Howtofindcare"
export default function Healthybodypage(){
    return(
    
            <Layout>
             {/* hero-section */}
             <div className="extrapage-hero healthybody-page">
             <h1 className="hero-h1 text-center  ">Healthy Body, Healthy Mind</h1>
             </div>
             <div className="flex flex-wrap laptop:flex-nowrap laptop:item-center laptop:flex-row laptop:items-center laptop:pl-0 laptop:pr-8 laptop:mb-[2rem]">
                <div className="image"></div>

                <div className="laptop:flex laptop:justify-center w-full">
                <p className="font-semibold pl-4 mt-4  laptop:w-[60%] laptop:text-[26px] laptop:mt-[3rem] laptop:text-center">You've probably heard the saying, "A healthy mind makes a healthy body." Our services are created to encourage involvement, fun, and stimulation because we are too.</p>     
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