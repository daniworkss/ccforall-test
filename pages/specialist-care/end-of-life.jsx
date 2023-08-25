import Layout from "../components/Layout"
import Footer from "../components/Footer"
import Howtofind from "../components/Howtofindcare"
import Image from "next/image"
export default function Endoflife(){
    return(
            <Layout>
             {/* hero-section */}
             <div className="extrapage-hero end-of-life-page">
             <h1 className="hero-h1 mt-7 text-center ">End Of Life Care</h1>
             </div>
             {/* main-section */}
             <div className="body-container laptop:flex laptop:justify-center">
                 <div className="extrapage-texts">
                    <h2 className="text-[28px] mb-4 text-light-blue font-semibold ">Personalized, dignified end-of-life care in the comfort of your home.</h2>
                 <p className="mb-4">Everybody has the right to decide how they want to spend their final days. This will mean staying at home in comfortable settings with the assistance of friends and family for many people.</p>
                 <p className="mb-4">We are aware of how upsetting it can be to witness a loved one's suffering from a terminal illness. We can be of assistance here. Bluebird Care offers crucial assistance and care at the end of life so that people and their families can make the most of their time spent at home.</p>
               
                 <h2 className="mb-4 text-[28px] text-light-blue font-semibold">Why Opt for Home Care for the Dying?</h2>
                 <p className="mb-4">We are committed to provide our clients comfortable, expert, and compassionate care as they approach the end of their lives. We create an end-of-life care plan that centers on the needs of each individual. If the care recipient desires it, we can attempt to include family and friends in this process as well.</p>
                 <p className="mb-4">Then, our in-home care service will be customized to fit your unique requirements. We honor and respect each person's entitlement to dignified care at this stage of their lives as well as their spirituality.</p>
                 <p className="mb-4">Our staff collaborates with other caretakers, medical experts, and other specialists. We control a care recipient's symptoms, uphold their dignity, and provide them with as much comfort as we can. In order to ensure that a person and their family feel safe and supported all the time, we will work with them.</p>
                 <p className="mb-4">Our skilled care team will be there for you every step of the way if you need end-of-life care for a loved one. We plan and execute end-of-life care with our patients' preferences and objectives at the forefront.</p>
                 <p className="mb-4">We take pleasure in our open and considerate communication. We make sure the person, their friends, and their families are aware of the variety of alternatives and services available to them and that they will be included in arranging end-of-life home care.</p>
                 <p className="mb-4">Get in touch today to find out more about how we can help you and your family with end of life care services.</p>
                <div className="flex justify-center mb-6 mt-6">
                 <Image
                  src={'/images/bodyimage-1.jpg'}
                  width={500}
                  height={500}
                  loading="lazy"
                 />
                 </div>
                 <h2 className="mb-4 mt-4 text-[28px] text-light-blue font-semibold">What is End of Life Care?</h2>
                 <p className="mb-4">Care for a person with a terminal illness is referred to as end-of-life care. The goal of this style of care is to keep the patient as comfortable as possible at all times by focusing on relieving symptoms, discomfort, and stress associated with a serious illness.</p>  
                 <p className="mb-4">Our main objective is to enhance people's quality of life as they near the end of their lives. We provide end-of-life care at home in accordance with the individual needs and choices of each of our clients, treating them as though they were members of our own family.</p>   
                 <p className="mb-4">End of life care can begin as soon as you or your loved one needs it and can last a few days, months or sometimes more than a year. People in a variety of different situations can benefit from end of life care. </p> 

                 <h2 className="mb-4 mt-4 text-[28px] text-light-blue font-semibold">What’s the Difference between End of Life Care and Palliative Care?</h2>
                 <p className="mb-4">End of life care offers treatment and support for people and their friends and family when they approach the end of their life. It is usually offered to those who are thought to be in the last year of their life.</p>   
                 <p className="mb-4">Palliative care is far more comprehensive and can extend for longer, even though it can involve end-of-life care. Years of palliative care may be given to some patients to help them cope with incurable illnesses.</p>  

                 <h2 className="mb-4 mt-4 text-[28px] text-light-blue font-semibold">Our Approach to End of Life Home Care</h2>
                 <p className="mb-4">The ability for your loved one to spend their final days in the environment where they feel most comfortable and secure is one of the key advantages of receiving end-of-life care at home. It also gives friends and family peace of mind because they know their loved one is receiving excellent care in the security of their own home.</p>   
                 <p className="mb-4">Home care for the terminally ill is less disturbing for everyone and can help make this tough time more bearable than hospice or hospital care. With round-the-clock care, any alterations in your loved one's condition will be identified and addressed right away.</p>    
                 <p className="mb-4">Our care assistants are fully trained in end of life care and are supported to develop further knowledge and skills to help you through difficult days.</p>       
                 </div>
                 
             </div>
             <Howtofind/>
             <Footer/>
            </Layout>
    )
}