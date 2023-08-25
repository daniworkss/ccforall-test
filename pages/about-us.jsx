import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Howtofind from "./components/Howtofindcare";
export default function Aboutus(){
    return(
        <Layout>
            <div className="about-container">
                <div className="about-hero about-page bg-darknavyblue">
                    <div className="w-full pl-4 ">
                        <h1 className="hero-h1 text-white text-left w-full mb-3 laptop:mb-0 laptop:text-center">About <span className="text-light-blue">Us</span></h1>
                        <div className="pr-10 laptop:flex laptop:justify-center laptop:mt-4">
                            <div className="laptop:w-[70%]">
                             <p className="text-white text-left hero-p laptop:text-center">We believe that care matters and we are committed to providing the highest quality home care so that our customers can remain in their own homes.</p>          
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* what we do */}
                <div className="pt-12 pl-4 pr-4 laptop:flex laptop:justify-center">
                    <div className="laptop:w-[60%]">
                    <h1 className="body-title text-left text-darknavyblue laptop:text-center ">What We Do <span className="text-light-blue">Best</span></h1>
                    <p className="mt-4 laptop:left ">Your loved one can live independently in their home for a longer period of time with the help of our knowledgeable and compassionate staff. Your loved one will benefit from care services that are specially tailored to them thanks to our individualized care plans, which are precisely matched to their needs. Our caring carers are here to give your loved one the top-notch assistance they need while giving you the tranquility you deserve.We provide life-improving assistance to persons with a variety of care requirements in your home and community, including</p>
                    </div>
                </div>
                {/* our values */}
                <div className="pt-12 pl-4 pr-4 laptop:flex laptop:justify-center">
                   <div className="laptop:w-[60%]">
                   <h1 className="body-title text-left laptop:text-center text-darknavyblue ">Our <span className="text-light-blue">Values</span></h1>
                    <p className="mt-4 laptop:text-left">Your loved one can live independently in their home for a longer period of time with the help of our knowledgeable and compassionate staff. Your loved one will benefit from care services that are specially tailored to them thanks to our individualized care plans, which are precisely matched to their needs. Our caring carers are here to give your loved one the top-notch assistance they need while giving you the tranquility you deserve.We provide life-improving assistance to persons with a variety of care requirements in your home and community, including</p>
                   </div>
                </div>
                {/* our comitments */}
                <div className="pt-12 pl-4 pr-4 laptop:flex laptop:justify-center">
                    <div className="laptop:w-[60%]">
                    <h1 className="body-title text-left text-darknavyblue  laptop:text-center">Our Commitment to <span className="text-light-blue">You</span></h1>
                    <p className="mt-4 laptop:">What distinguishes our in-home care services? Simply put, we prioritize our customers like you. Our goal is to offer the level of care that we ourselves would demand for our own family. This entails respecting the distinctive traits of each client and treating them as a full person rather than just a list of care requirements.</p>
                    <p className="mt-4 laptop:">Our services are adaptable and take into account your shifting demands and objectives. As much as they are able, we work with families to keep our clients in charge of their own care. In order to provide you with the care and assistance you desire, we always pay close attention to what you have to say. We communicate frequently so that you may quickly come to know the staff at your neighborhood. We place a lot of emphasis on developing relationships that you can rely on as we run our business.</p>
                    <h2 className="mt-6 text-[24px] text-darknavyblue font-semibold">Our procedure for compliments, concerns, and complaints</h2>
                    <p className="mt-2 laptop:">We sincerely appreciates all of your input because it enables us to provide better services.  For handling any worries and complaints, we have a transparent process.  When the service begins, we give a copy of our protocol to each of our homecare clients. We want to make sure you know exactly how to express any potential complaints or positive comments and that there are no misunderstandings.</p>
                    </div>
  
                </div>
                <div className="pt-12 pl-4 pr-4 laptop:flex laptop:justify-center">
                    <div className="laptop:w-[60%]">
                    <h2 className="mt-6 text-[24px]  text-darknavyblue font-semibold">Verifying the caliber of our homecare assistance</h2>
                    <p className="mt-4">Your care supervisors will periodically inquire about your satisfaction with the services you receive from us. We provide this information to the nation's homecare services regulator. In each of the four nations that make up the United Kingdom, there is a national regulator. These regulatory authorities are in charge of ensuring that homecare services adhere to legal requirements and basic safety and quality standards. Periodic inspections are conducted by each authority to evaluate our services.  They might directly solicit input from our customers as part of these assessments.We also belong to the United Kingdom Home Care Association, a group that aids in raising the bar for care and assistance provided by home care providers. </p>
                    </div>
                </div>
                
            </div>
            <Howtofind/>
            <Footer/>
        </Layout>
    )
}