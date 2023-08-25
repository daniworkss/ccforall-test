import Layout from "../components/Layout"
import Footer from "../components/Footer"
import Howtofind from "../components/Howtofindcare"
export default function Puttingyou(){
    return(
        
            <Layout>
             {/* hero-section */}
             <div className="extrapage-hero putting-you-first-page  ">
             <h1 className="hero-h1 mt-2 text-center">Putting You First</h1>
             </div>
             {/* main-section */}
             <div className="body-container laptop:flex laptop:justify-center">
                 <div className="extrapage-texts">
                <h2 className="text-[24px] text-light-blue font-semibold mb-4">We provide you and your family with a personalized, expert service.</h2>
                    <p className="mb-4">We are committed to providing each and every client with the highest quality care.</p>
                    <p className="mb-4 font-semibold">We put our customers first</p>
                    <p className="mb-4">What distinguishes our in-home care services? We always prioritize you. Our goal is to offer the level of care that we ourselves would demand for our own family.</p>
                    <p className="mb-4">Our services are adaptable and take into account your shifting demands and objectives. As much as you are able, we assist you in maintaining control over your own care. In order to provide you with the care and assistance you desire, we always pay close attention to what you have to say.</p>
                    <p className="mb-4">Our employees take the time to get to know each client personally and perceive them as a whole person, not just a list of care requirements. We value and respect our clients' individual choices about how to live their life. </p>
                    <p className="mb-4 font-semibold">We work with people who are kind, competent, and sympathetic.</p>
                    <p className="mb-4">We only work with care assistants that are committed to providing excellent client service.</p>
                    <p className="mb-4">You will quickly come to know the staff because they will communicate frequently with you. We place a lot of emphasis on developing relationships that you can rely on as we run our business.  Your supervisor will frequently inquire about your satisfaction with the services you receive from us.  We make a lot of effort to follow through on our commitments and to give the dependable, consistent service you demand.</p>
                    <p className="mb-4 font-semibold">We welcome your feedback and we listen</p>
                    <p className="mb-4">We value your input since it enables us to provide better services.  Anytime you want, you are welcome to contact us to discuss any part of your service. We want to make sure you know exactly how to express any potential complaints or positive comments and that there are no misunderstandings.</p>
                    <p className="mb-4">The appropriate assistance will be provided by our management staff so that you can voice any complaints or problems you may have.  You can rest assured that we abide by all regulations set forth by our regulator. </p>
                    <p className="mb-4 font-semibold">We look after your safety</p>
                    <p className="mb-4">Our top priority is keeping you secure. We ensure that our care assistants are fully trained to do their position safely and to recognize indicators of abuse in order to protect you from harm. Any worries you might have about your safety will be heard by your care assistant, who will then bring them up with the registered manager. We do not put up with mistreatment of either our clients or employees.</p>
                 </div>
                 
             </div>
             <Howtofind/>
             <Footer/>
            </Layout>
    )
}