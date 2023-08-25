import Footer from "../components/Footer"
import Layout from "../components/Layout"
import Howtofind from "../components/Howtofindcare"
export default function Inhomecare (){
    return(
       <Layout>
        {/* hero-section */}
        <div className="extrapage-hero homecare-page">
        <h1 className="hero-h1 mt-2 text-center tablet:text-center">Home <span className="text-light-blue">Care</span></h1>
        <p className="text-center">24/7 assistance, care, and company in the comfort of your own home.</p>
        </div>
        {/* main-section */}
        <div className="body-container laptop:flex laptop:justify-center">
            <div className="extrapage-texts">
            <p className="mb-4">You might not want the additional burden of having to leave your familiar surroundings when you need ongoing care. You have the choice of receiving top-notch care from us without relocating to a nursing facility. In the comfort of your own home, our live-in care service provides the guarantee of round-the-clock assistance and care.</p>
            <p className="mb-4">We never adopt a one-size-fits-all philosophy when providing care; instead, we take into account each client's individual requirements at every stage, ensuring that you are always in charge of your assistance and care. To ensure that you receive the treatment you desire in the manner you desire, a member of our staff will inquire as to what is significant in the way you live your life.</p>

            </div>
            
        </div>
        <Howtofind/>
        <Footer/>
       </Layout>
        
    )
}