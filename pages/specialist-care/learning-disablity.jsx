import Layout from "../components/Layout"
import Footer from "../components/Footer"
import Howtofind from "../components/Howtofindcare"
import Image from "next/image"
export default function Learning(){
    return(
            <Layout>
             {/* hero-section */}
             <div className="extrapage-hero learning-disablility-page">
             <h1 className=" text-[30px] laptop:text-[73px] font-bold text-center">Learning Disabilities Support</h1>
             <p className="pb-[5rem] text-center">To each of us, enjoying a meaningful life is equally vital. Learning disabled people are not an exception.</p>
             </div>
             {/* main-section */}
             <div className="body-container laptop:flex laptop:justify-center">
                 <div className="extrapage-texts">
                    <h2 className="text-[28px] mb-4 text-light-blue font-semibold ">Learning Disabilities Support</h2>
                 <p className="mb-4">For persons with learning difficulties, We offer specialized care that encourages independence and self-direction. We believe everyone should have the opportunity to have a full life, which is why we offer kind, individualized treatment that promotes wellbeing.</p>
                 <p className="mb-4">Never do we adopt a one-size-fits-all strategy. We are aware that each person's situation, circumstances, and preferences will vary. Because of this, we work closely with clients and their families to develop a personalized support strategy that prioritizes clients' needs and objectives.</p>
                 <div className="flex justify-center mb-6 mt-6">
                 <Image
                    src={'/images/bodyimage-2.jpg'}
                    width={500}
                    height={400}
                    loading="lazy"
                 />
                 </div>
                 <p className="mb-4">Caring for loved ones who have learning difficulties can leave parents, caregivers, and other family members feeling overburdened. Our Bluebird caregivers are available to provide individualized and compassionate care if you need assistance navigating your loved one's health or need more support and direction.</p>
                 <p className="mb-4">The team is accessible for both emotional and social growth in addition to physical help. Our caregivers will act as a confidante who will hear your loved one's concerns and a friend with whom they may discuss their hobbies.</p>
                 <p className="mb-4">Get in touch with us right away to discover more about how we can support your family and members with learning impairments at home.</p>
                 <h2 className="mb-4 mt-4 text-[28px] text-light-blue font-semibold">What Is A Learning Disability?</h2>
                 <p className="mb-4">Reduced intellectual ability and difficulties doing routine tasks are symptoms of a learning disability. The amount of assistance required will vary depending on the person. For instance, a person with a modest learning handicap might merely require assistance with community interaction or finding work. A person who has a severe or significant learning handicap, however, might require full-time care.</p>
                 <p className="mb-4">The daily lives of the 1.5 million UK residents who have a learning disability are impacted in a number of different ways. Many of them rely on the help of their friends and relatives. However, by providing people with learning disabilities and their families with a committed caregiver, we enable them to manage their condition.</p>
                 <h2 className="mb-4 mt-4 text-[28px] text-light-blue font-semibold">Care for Adults with Learning Disabilities</h2>
                 <p className="mb-4">We aim to stand by our clients and assist them in leading fulfilling lives where every day can be novel and exciting. We provide a variety of support services for learning difficulties as a result. Every person with a learning disability is different, which is why we focus on each person's talents and abilities. Our skilled caregivers will offer assistance with independence, social growth, and communication.</p>
                 <p className="mb-4">Our supported living options for persons with learning disabilities can be customized to meet specific requirements and tastes. From dropping by once or twice a week to offering live-in care around-the-clock, our caregiver services are flexible. We are here to promote individualism, offer effective and clear communication, and enable people to realize their goals and feel a feeling of accomplishment.</p>  
                 <p className="mb-4">Our care assistants have practical experience in meeting a wide range of complex care and support needs for people receiving care in the community. They are fully trained to respond to different communication needs, autistic spectrum disorders, physical disabilities, and sensory impairments.</p>   
                 </div>
                 
             </div>
             <Howtofind/>
             <Footer/>
            </Layout>
    )
}