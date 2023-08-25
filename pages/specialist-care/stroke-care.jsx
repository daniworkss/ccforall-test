import Layout from "../components/Layout"
import Footer from "../components/Footer"
import Howtofind from "../components/Howtofindcare"

export default function Hypertension(){
    return(
            <Layout>
             {/* hero-section */}
             <div className="extrapage-hero stroke-care-page">
             <h1 className="hero-h1 pt-8 text-center ">Stroke Care</h1>
             </div>
             {/* main-section */}
             <div className="body-container laptop:flex laptop:justify-center">
                 <div className="extrapage-texts">
                 <p className="mb-4">After a stroke, life can be challenging to get used to. You can be feeling worn out, worried about the future, upset that this has happened to you or someone you care about, or all of these things.</p>    
                 <p className="mb-4">We can offer the additional home care and assistance you require to handle these difficulties. Our devoted staff members have years of expertise offering social, emotional, and practical support to enable you to live a normal, independent life.</p>
                 <p className="mb-4">In the UK, almost 150,000 people will experience a stroke annually. Although it can happen to anyone at any age, 75% of instances involve those over 65. The risk of stroke might be raised by a family history of the disease, diabetes, obesity, and high blood pressure.</p>
                 <p className="mb-4">Because every person's experience will be unique, we always inquire about your priorities in life as well as your specific requirements and preferences. Together, we develop a customized homecare and support plan to assist you in achieving your unique objectives and leading the life you want. You always have the upper hand; we recognize that it's your house and your decision. We provide the following services:</p>
                 <ul className="mb-4 pl-8 flex flex-col gap-4 pb-4">
                    <li>Assistance with recovery. encouragement for relearning skills and discovering fresh approaches to handling daily chores</li>
                    <li>A satisfying morning begins with assistance with showering, dressing, and breakfast.</li>
                    <li>Encouragement to participate in vital activities, visit with loved ones, or take a walk</li>
                    <li>Practical assistance with household tasks like shopping, laundry, and housecleaning</li>
                    <li>Assistance with medication administration and/or ensuring you have a ready supply</li>
                    <li>Making sure you have wholesome meals and the assistance you need to eat and drink appropriately will lower your chance of having more strokes.</li>
                    <li>A night time call to settle you comfortably in bed</li>
                    <li>24 hour homecare service to give carers a short term break or live-in care onlonger term basis</li>
                 </ul>
                 
                 
                 <h2 className="mb-4 mt-4 text-[28px] text-light-blue font-semibold">What is a stroke?</h2>
                 <p className="mb-4">A stroke may be caused by a ruptured blood vessel or a blood clot that blocks the flow of blood to the brain. Each person will be affected differently depending upon the location and extent of damage to the brain cells</p> 

                 <h2 className="mb-4 mt-4 text-[28px] text-light-blue font-semibold">The effects of a  stroke</h2>
                 <p className="mb-4">A third of stroke survivors will eventually develop asphasia. Speaking, reading, writing, and understanding are among the communication abilities that are impacted by this illness. It is incredibly annoying despite having no impact on a person's intelligence. Some people may lose their memory or their ability to focus. The highly trained homecare staff at Bluebird Care employs a variety of tools and communication techniques to assist the person in expressing their needs. We determine what works best for you before we arrange your homecare and support.</p>   
                 <p className="mb-4">You can lose control of your bowels or bladder. This may make you feel embarrassed. In order to reassure you, our personnel will treat you with dignity while giving personal care.</p>   
                 <p className="mb-4">Even though these behaviors may be unusual, despair, rage, or an inability to control emotions are common reactions to the trauma of a stroke. Anxiety over one's health, returning to work, and drug side effects can all exacerbate these behaviors. Families could observe a shift in a child's personality or behavior.We pay attention to how you and your family are experiencing. By being patient and listening, we help you as much as we can to recover control.</p>   
                 <p className="mb-4">Seizures, weakness or paralysis, frequently on one side of the body, loss of awareness of one side of the body, and acute exhaustion are some of the physical consequences of a stroke. Our top-notch homecare services offer beneficial assistance to lessen the effects of various ailments.</p>   
                 </div>
                 
             </div>
             <Howtofind/>
             <Footer/>
            </Layout>
    )
}