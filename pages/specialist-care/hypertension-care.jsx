import Layout from "../components/Layout"
import Footer from "../components/Footer"
import Howtofind from "../components/Howtofindcare"

export default function Hypertension(){
    return(
            <Layout>
             {/* hero-section */}
             <div className="extrapage-hero hypertension-care-page">
             <h1 className="hero-h1 mt-7 text-center ">Hypertension Care</h1>
             </div>
             {/* main-section */}
             <div className="body-container laptop:flex laptop:justify-center">
                 <div className="extrapage-texts">
                 <p className="mb-4">We want to assist you in lowering the risks of illness linked to high blood pressure, often known as hypertension. The risk of high blood pressure can be increased by genetic factors or lifestyle factors including poor diet, being overweight, smoking, drinking too much alcohol, or having diabetes.</p>    
                 <p className="mb-4">We are aware that even minor adjustments in lifestyle can have a significant impact. We provide you with the specialized care and encouragement you require to accomplish these lifestyle adjustments.</p>
                 <h2 className="mb-4 mt-4 text-[28px] text-light-blue font-semibold">As one of the UK’s care providers, we can support you to:</h2>
                 <ul className="mb-4 pl-8 flex flex-col gap-4 pb-4">
                    <li>Plan enjoyable healthy meals, assist you in purchasing and preparing the proper foods, or motivate you to stick to your goals to maintain a diet that is low in sodium, saturated fats, and added sugar.</li>
                    <li>Regular, doable exercise should be a part of your everyday routine.</li>
                    <li>Keep up with the people you know and the things you enjoy doing.</li>
                    <li>Take your medications as directed and show up for appointments with the doctor as necessary.</li>
                 </ul>
                 
                 
                 <h2 className="mb-4 mt-4 text-[28px] text-light-blue font-semibold">What does high blood pressure mean?</h2>
                 <p className="mb-4">In the UK, high blood pressure affects up to one-third of adults. This illness frequently has a lifelong impact and now increasingly affects kids and teenagers. Because people frequently do not realize they have it until their illness has grown fairly serious, it is sometimes referred to as the "silent killer."</p> 
                 <p className="mb-4">The force of blood pressing against the walls of the arteries (major blood vessels) while the heart pumps it throughout the body is referred to as blood pressure. The workload on the heart is increased and the arteries can become damaged if your blood pressure is too high. Early diagnosis is crucial since high blood pressure increases the risk of kidney, heart, and brain illness as well as stroke and dementia if left untreated.</p> 

                 <h2 className="mb-4 mt-4 text-[28px] text-light-blue font-semibold">Support to stay well</h2>
                 <p className="mb-4">Our goal as caregivers is to give you the individualized attention and support you need to preserve your well-being and standard of living.</p>   
                 </div>
                 
             </div>
             <Howtofind/>
             <Footer/>
            </Layout>
    )
}