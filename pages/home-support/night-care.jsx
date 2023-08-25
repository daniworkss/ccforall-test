import Layout from "../components/Layout"
import Howtofind from "../components/Howtofindcare"
import Footer from "../components/Footer"
export default function Nightcare(){
    return(
        <Layout>
         {/* hero-section */}
         <div className="extrapage-hero nightcare-page">
         <h1 className="hero-h1 mt-2 text-center">Night <span className="text-light-blue">Care</span></h1>
         <p className="text-center w-full ">Overnight care to help you or a loved one sleep soundly through the night</p>
         </div>
         {/* main-section */}
         <div className="body-container laptop:flex laptop:justify-center">
             <div className="extrapage-texts">
             <p className="mb-4">Night care at home is a crucial component of what we offer. Our devoted team of individuals works throughout the night to ensure that our customers always feel supported and cared for.</p>
             <h2 className="mb-2 text-light-blue font-semibold text-[24px]">Sleeping Night</h2>
             <p className="mb-4">The care assistant spends at least eight hours each night at the home and is available if needed. If you don't need ongoing assistance but get anxious when left alone all night, this is a good choice. With a sleeping night care professional by your side, your anxieties and lack of sleep will soon improve. Having additional nighttime care at home can tremendously support your continued health and happiness. A waking night is one in which help is required more than twice in the course of the night.</p>
             <h2 className="mb-2 text-light-blue text-[24px] font-semibold">Waking Night</h2>
             <p className="mb-4">The care provider is on call for a minimum of eight hours each night. The ideal assistance option is this if you or a loved one repeatedly wakes up, perhaps because they are confused or need to use the restroom. This is probably the best option for you if you need to administer medication on a regular basis or if you need to shift positions throughout the night due to an injury. For the length of the night, the waking night care specialist is by your side, available whenever you need them and offering a high degree of specialized support.</p>
             </div>
             
         </div>
         <Howtofind/>
         <Footer/>
        </Layout>
        )
}