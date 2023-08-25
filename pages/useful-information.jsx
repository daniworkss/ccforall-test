import Footer from "./components/Footer";
import Layout from "./components/Layout";
import { useState } from "react";
import Howtofind from "./components/Howtofindcare";
import Link from "next/link";
export default function Usefulinfo(){
    const [dropdown1,setDropdown1] = useState()
    const [dropdown2,setDropdown2] = useState()
    const [dropdown3, setDropdown3] = useState()
    const [dropdown4, setDropdown4] = useState()
    return(
        <Layout>
            <div className="w-full mt-[7rem] laptop:mt-[8rem] flex justify-center items-center pl-4 pr-4">
                <h1 className="text-[27px] laptop:text-[34px] font-semibold text-darknavyblue"> Frequently Asked Questions</h1>
            </div>
            <div className=" w-full laptop:flex laptop:justify-center laptop:mt-[1rem]">
            <div className="extrapage-texts mt-4 pl-4 pr-4 flex flex-col gap-[1rem] laptop:items-center ">       
               
               <div className="flex flex-col items-center">
                <div className={`frequently_asked_question_box flex items-center justify-between cursor-pointer ${dropdown1 ? 'bg-darknavyblue text-white transition-colors duration-[.2s] ease-in' : 'bg-white text-darknavyblue transition-colors duration-[.2s] ease-out'}`} onClick={()=> setDropdown1(!dropdown1)} >
                 <p className={`text-[20px] font-semibold ${dropdown1 ? 'text-white transition-all duration-[.2s] ' : 'text-light-blue transition-all duration-[.2s]'}`}>How do I arrange a care service with Ccforall limited ? </p>
                 <div className="text-[24px]"><ion-icon name={dropdown1 ? 'remove-circle' :'add-circle'}></ion-icon></div>
                </div>
                <div className={`frequently_asked_question_box2 w-[100%]  overflow-y-hidden flex flex-col  bg-darknavyblue ${dropdown1 ? 'h-[250px] pt-0 pl-4 pr-2  transition-all duration-[.5s]': 'h-[0px] transition-all duration-[.5s]'}`}>
                    <div className="fqa-line w-full h-[1px] mb-4 bg-white"></div>
                    <p className="text-white">Make an appointment with us so that we may come to your home and talk with you about how we can benefit you. Once you've made a decision, we'll be pleased to visit you at home to explain how we can help. After that, you can leave the rest to us.</p>
                </div>
               </div>

               <div className="flex flex-col items-center">
                <div className={`frequently_asked_question_box flex items-center justify-between cursor-pointer ${dropdown2 ? 'bg-darknavyblue text-white transition-colors duration-[.2s] ease-in' : 'bg-white text-darknavyblue transition-colors duration-[.2s] ease-out'}`} onClick={()=> setDropdown2(!dropdown2)} >
                 <p className={`text-[20px] font-semibold ${dropdown2 ? 'text-white transition-all duration-[.2s] ' : 'text-light-blue transition-all duration-[.2s]'}`}>What if I dislike or wish to alter my care package?</p>
                 <div className="text-[24px]"><ion-icon name={dropdown2 ? 'remove-circle' :'add-circle'}></ion-icon></div>
                </div>
                <div className={`frequently_asked_question_box2 w-[100%]  overflow-y-hidden flex flex-col  bg-darknavyblue ${dropdown2 ? 'h-[250px] pt-0 pl-4 pr-2  transition-all duration-[.5s]': 'h-[0px] transition-all duration-[.5s]'}`}>
                    <div className="fqa-line w-full h-[1px] mb-4 bg-white"></div>
                    <p className="text-white">According to our experience, care requirements for individuals frequently alter. We comprehend that periodically reviewing care may be necessary. Because of this, we regularly do reviews and appreciate hearing from members of the direct family regarding efficient ways to provide care for their loved one. </p>
                </div>
               </div>

               <div className="flex flex-col items-center">
                <div className={`frequently_asked_question_box flex items-center justify-between cursor-pointer ${dropdown3 ? 'bg-darknavyblue text-white transition-colors duration-[.2s] ease-in' : 'bg-white text-darknavyblue transition-colors duration-[.2s] ease-out'}`} onClick={()=> setDropdown3(!dropdown3)} >
                 <p className={`text-[20px] font-semibold ${dropdown3 ? 'text-white transition-all duration-[.2s] ' : 'text-light-blue transition-all duration-[.2s]'}`}>Will i have the same care assistant each day?</p>
                 <div className="text-[24px]"><ion-icon name={dropdown3 ? 'remove-circle' :'add-circle'}></ion-icon></div>
                </div>
                <div className={`frequently_asked_question_box2 w-[100%]  overflow-y-hidden flex flex-col  bg-darknavyblue ${dropdown3 ? 'h-[250px] pt-0 pl-4 pr-2  transition-all duration-[.5s]': 'h-[0px] transition-all duration-[.5s]'}`}>
                    <div className="fqa-line w-full h-[1px] mb-4 bg-white"></div>
                    <p className="text-white">The number of care visits you receive each week will determine this. We hardly never allocate a single customer with just one care assistant. This permits times when your care assistant might be on vacation, but we do our best to minimize the number of your care assistants to a bare minimum.</p>
                </div>
               </div>

               <div className="flex flex-col items-center">
                <div className={`frequently_asked_question_box flex items-center justify-between cursor-pointer ${dropdown4 ? 'bg-darknavyblue text-white transition-colors duration-[.2s] ease-in' : 'bg-white text-darknavyblue transition-colors duration-[.2s] ease-out'}`} onClick={()=> setDropdown4(!dropdown4)} >
                 <p className={`text-[20px] font-semibold ${dropdown4 ? 'text-white transition-all duration-[.2s] ' : 'text-light-blue transition-all duration-[.2s]'}`}>What if I dislike or wish to alter my care package?</p>
                 <div className="text-[24px]"><ion-icon name={dropdown4 ? 'remove-circle' :'add-circle'}></ion-icon></div>
                </div>
                <div className={`frequently_asked_question_box2 w-[100%]  overflow-y-hidden flex flex-col  bg-darknavyblue ${dropdown4 ? 'h-[250px] pt-0 pl-4 pr-2  transition-all duration-[.5s]': 'h-[0px] transition-all duration-[.5s]'}`}>
                    <div className="fqa-line w-full h-[1px] mb-4 bg-white"></div>
                    <p className="text-white">According to our experience, care requirements for individuals frequently alter. We comprehend that periodically reviewing care may be necessary. Because of this, we regularly do reviews and appreciate hearing from members of the direct family regarding efficient ways to provide care for their loved one. </p>
                </div>
               </div>

               

               

            </div>
            </div>
{/* for other texts */}
           <div className="flex justify-center mt">
           <div className="body-container laptop:w-[50%] pl-4 pr-4 ">
                <h2 className="body-title text-darknavyblue text-[28px] laptop:text-[26px]  mb-2 font-semibold ">Your Safety & <span className="text-light-blue">Wellbeing</span></h2>
                <p className="mb-4">It might be difficult to choose the best individual or business to care for and support you or a loved one. You require a caring someone with the necessary expertise and abilities, someone you can depend on, and most importantly, someone you can trust.</p>
                <h2 className="body-title text-darknavyblue text-[28px] laptop:text-[26px] mb-2 font-semibold ">Preventing <span className="text-light-blue">Falls</span></h2>
                <p className="text-darknavyblue mb-4 font-semibold">We offer advice about how to prevent falls, steer clear of injuries and  avoid paying for care as a result of falling.</p>
                <p className="mb-4">Aging does not necessarily result in falling. By learning how to lower the dangers, we can stop falls from occuring. </p>
                <p className="mb-4">The risk of falling increases along with the likelihood of suffering major injuries as we age and become less steady on our feet. Nearly a third of seniors over 65 fall each year in the UK. This increases to 50% of those who are 80 years or older.</p>
                <p className="mb-4">We cannot remove all of the risks, but we can certainly reduce them by:</p>
                <ul className="pl-8 mb-8 text-[18px] gap-[10px] flex flex-col">
                    <li>Understanding the risks</li>
                    <li>Looking after our health</li>
                    <li>Keeping our homes safe</li>
                    <li>Seeking the right care and support if paying for care becomes a necessity.</li>
                </ul>
                 
                 <h2 className="text-[28px] font-semibold mb-4">Sign up to our Newsletter</h2>
                 <div className="">
                 <Link href={'/news-letter'} className="w-full laptop:w-[45%] flex justify-start laptop:justify-start">
                        {/* check global css for button animation */}
                            <button className="  bg-light-blue pl-6 pr-6 flex text-white items-center w-[35%] laptop:w-[70%] rounded-[5px] justify-between  relative hover:text-darknavyblue hover:bg-white transition-colors duration-[.4s] ease-in text-[20px]  h-[55px] font-semibold">
                                    Click here
                                    <div className="mt-2">
                                   <ion-icon name="arrow-dropright-circle" className = 'mt-52'></ion-icon>          
                                    </div>
                            </button>
                </Link>
                 </div>
            </div>
           </div>
            <Howtofind/>
            <Footer/>
        </Layout>
    )
}