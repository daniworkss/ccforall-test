import Layout from "../components/Layout"
import Howtofind from "../components/Howtofindcare"
import Footer from "../components/Footer"
export default function Extracare(){
    return(
            <Layout>
             {/* hero-section */}
             <div className="extrapage-hero extracare-page">
             <h1 className="hero-h1 mt-2 text-center text-light-blue">Extra Care To Live Life Your Way</h1>
             </div>
             {/* main-section */}
             <div className="body-container laptop:flex laptop:justify-center">
                 <div className="extrapage-texts">
                        <h2 className="text-[24px] font-semibold mb-4 text-light-blue ">Our goal is to make your experience receiving home care not just good, but fantastic! </h2>
                        <p className="mb-4">Beyond merely attending to your safety and physical requirements, We aim to do more. We wish to offer a service that improves your quality of life and brings you the satisfaction you deserve.</p>
                        <p className="mb-4">Regardless of our age or health, we all want for a life that is enriched by meaning and purpose. Our emotional and mental health depend on this. Our identity and self-worth are maintained through it. Many homecare businesses offer standard services, but we go over and above. We concentrate on what matters to you and how we can address your requirements in terms of your soul, mind, body, and family.</p>
                        <p className="mb-4">Gaining an understanding of each client's particular attributes and characteristics is a crucial component of our homecare and support service. We're interested in learning about your passions, pastimes, and life-enriching experiences.</p>
                        <p className="mb-4">Then, we'll make an effort to pair you up with a home health aide who shares your interests. The extra motivation to keep your head engaged and your heart fulfilled comes from having someone who supports you and understands your passions.</p>
                 </div>
                 
             </div>
             <Howtofind/>
             <Footer/>
            </Layout>
    )
}