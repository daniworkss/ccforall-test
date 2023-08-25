import Layout from "../components/Layout"
import Footer from "../components/Footer"
import Howtofind from "../components/Howtofindcare"
export default function Physical(){
    return(
        <Layout>
        {/* hero-section */}
        <div className="extrapage-hero physical-disability-page">
        <h1 className="hero-h1 text-center">Physical Disabilities Care</h1>
        </div>
        {/* main-section */}
        <div className="body-container laptop:flex laptop:justify-center">
            <div className="extrapage-texts">
            <p className="mb-4">Living an active and fulfilling life should not be made impossible by having a physical impairment. Whether a person has a physical handicap that has only recently been identified or one that they have dealt with for a considerable amount of time, our care and support are intended to enable them to live as independently as possible.</p>
            <p className="mb-4">We are here to offer persons with disabilities specialized assistance. We are aware that each person's circumstances, situations, and tastes will vary. Never do we adopt a one-size-fits-all strategy.</p>
            <h2 className="mb-4 mt-4 text-[28px] text-light-blue font-semibold">Home Care For Disabled Adults</h2>
            <p className="mb-4">We support collaborating with individuals and their families. Our strategy for supporting people with physical impairments is to put the client at the center of the support plan and collaborate with them to understand their requirements, preferences, and aspirations.</p>
            <p className="mb-4">We support people who have struggled with their disability for a long time and need encouragement to go for a dream they've had for a long time. We also offer support to people who have just received a diagnosis and are looking for direction and coping mechanisms in daily life.</p>
            <p className="mb-4">It may be preferable to receive care at home rather than relocating to a care facility far from one's loved ones. Our specially designed home care for disabled persons ensures that our clients may fully live their lives. We are able to assist your loved one with a variety of everyday activities with one-on-one assistance from our highly qualified and sympathetic carers.</p>
            <p className="mb-4">Get in touch today to find out more about how we can help you and your family and provide Parkinson’s disease home care.</p>
            <h2 className="mb-4 mt-4 text-[28px] text-light-blue font-semibold">What Is A Physical Disability</h2>
            <p className="mb-4">A physical disability is a substantial and long-term condition that affects a part of a person’s body, impairing or limiting their mobility, stamina or dexterity. Each physical disability is unique and affects individuals differently, resulting in different symptoms. Physical disabilities can place limitations on a person’s ability to complete daily tasks. Individuals may find it more challenging to walk, sit, stand, control certain muscles or move their limbs.</p>  
            <h2 className="mb-4 mt-2 text-[28px] font-semibold text-light-blue">The Importance Of Physical Disabilities Support At Home</h2>
            <p className="mb-4">We recognise each person as an individual with different interests and aspirations. By focusing on your unique strengths and abilities, we can support you in achieving your personal goals. Our home care for disabled adults covers a range of services. From helping with daily tasks to providing company with a good cup of tea, our carers are expertly trained to ensure your loved one can get the most out of life.</p> 

            <p className="mb-4">Depending on the support you need, our carers can pop in once or twice a week or provide up to 24-hour home care.</p>
            <p className="mb-4">Our care assistants have practical experience in meeting a wide range of complex care and support needs. They are fully trained to respond to different communication needs, physical disabilities, and sensory impairments.</p>
            </div>
            
        </div>
        <Howtofind/>
        <Footer/>
       </Layout>
    )
}