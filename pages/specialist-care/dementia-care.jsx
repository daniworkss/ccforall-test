import Layout from "../components/Layout"
import Footer from "../components/Footer"
import Howtofind from "../components/Howtofindcare"
export default function Dementia(){
    return(
        <Layout>
        {/* hero-section */}
        <div className="extrapage-hero dementia-care-page">
        <h1 className="hero-h1 text-center mt-8 laptop:mt-0">Dementia Care</h1>
        </div>
        {/* main-section */}
        <div className="body-container laptop:flex laptop:justify-center">
            <div className="extrapage-texts">
            <p className="mb-4">Let us assist you by providing specialized in-home dementia care. Our dementia care services at Bluebird Care can give you the crucial support you require. Our nationwide network of specialists, who are committed to assisting persons with dementia to live an independent life at home, provide our private dementia care.</p>
            <h2 className="mb-4 mt-4 text-[28px] text-light-blue font-semibold">Dementia Care At Home</h2>
            <p className="mb-4">Our dementia home care services are designed to provide warmth, comfort, and assurance to the person with dementia and their families while managing the disease's affects and symptoms. We are aware of the difficulties in coping with dementia on an emotional, social, and practical level.</p>
            <p className="mb-4">As the condition worsens, the world of the dementia patient and their family caregivers gradually gets smaller. It can often be challenging to maintain a life outside the house or even to maintain the closeness you formerly shared. This can make you feel alone and worn out, along with the duties of providing actual care and assistance.</p>
            <p className="mb-4">For a person with dementia, a change in routine and environment can be extremely frightening. Because their loved one may remain in the familiar and beloved environment, more families are choosing home care over residential care. Our dementia care services thoughtfully address the unique requirements of you and your family.</p>
            <p className="mb-4">Our highly educated professionals provide flexible services that are tailored to meet your loved one's preferred lifestyle with respect and compassion so they can keep enjoying the important things in life. To learn more about how our dementia home care services can benefit you and your family, get in touch with us right away.</p>
            <h2 className="mb-4 mt-4 text-[28px] text-light-blue font-semibold">What is Dementia?</h2>
            <p className="mb-4">The term "dementia" refers to a variety of illnesses and symptoms with comparable progressive symptoms that impair the brain's and memory's normal function.</p>
            <p className="mb-4">The billions of neurons, or nerve cells, that make up the brain exchange chemical impulses with one another. These neurons degrade as a result of dementia, making it more difficult for the brain to operate correctly.</p>  
            <p className="mb-4">The impacts it causes on the body frequently start out mild before getting gradually worse as the situation worsens. The disease that causes dementia and the areas of the brain that are affected will both have an impact on the symptoms that a person with dementia feels.</p>   
            <h2 className="mt-4 mb-4 text-[28px] text-light-blue font-semibold">What Is Dementia Care?</h2>
            <p className="mb-4">The goal of dementia care is to provide you or a loved one with the support they need to remain at home and live a happy life. Our specialists at Bluebird Care are available to collaborate with you and your family to establish a routine that fosters as much independence as possible</p>
            <p className="mb-1 text-[20px] font-semibold">Dementia Care In Your Home</p>
            <p className="mb-4">Any assistance you or a loved one needs to preserve their quality of life while living at home can be obtained from our fully trained carers. Whether you just need someone to check on your relative in the morning and help with breakfast, or ongoing live-in care to make sure they're safe at night, we'll work with you to build a specialized care plan.</p>
            </div>
            
        </div>
        <Howtofind/>
        <Footer/>
       </Layout>
    )
}