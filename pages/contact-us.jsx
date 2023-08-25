import Footer from "./components/Footer";
import Layout from "./components/Layout";

export default function Contactus(){
    return(
        <Layout>
            <div className="extrapage-hero  bg-darknavyblue contactpage-hero">
                <h1 className="hero-h1 text-white text-center">Contact <span className="text-light-blue">Us</span></h1>
            </div>

            <div className="body-container mt-8 h-[250px] tablet:h-[250px] laptop:h-[220px]">
                <h2 className="text-center text-light-blue text-[20px] tablet:text-[24px] font-semibold ">GET IN TOUCH</h2>
                <h1 className="text-center text-darknavyblue text-[35px] tablet:text-[50px] font-semibold">We want to share our location to find us easily.</h1>
            </div>
            <div className="box-container flex flex-col laptop:flex-row laptop:items-center laptop:gap-[2rem] laptop:pb-8  pb-10 gap-[2rem] justify-center ">
                <div className="box flex flex-col items-center mt-8 laptop:mt-0 laptop:w-[25%] w-[400px] h-[400px] bg-white">
                  <div className="flex flex-col items-center">
                     <div className="text-[50px] text-light-blue">
                     <ion-icon name="pin"></ion-icon>
                     </div>
                     <h2 className="text-[28px] font-semibold">Our Location</h2>
                     <p className="text-center mt-2">Pera Business Park Nottingham Road Melton Mowbrary LE13 0PB</p>
                  </div>
                </div>
                <div className="box flex flex-col items-center mt-8 laptop:mt-0 laptop:w-[25%] w-[400px] h-[400px] bg-white">
                <div className="flex flex-col items-center">
                     <div className="text-[50px] -mt-4 text-light-blue">
                     <ion-icon name="call"></ion-icon>
                     </div>
                     <h2 className="text-[28px] font-semibold">Our Phone</h2>
                     <p className="mt-2">07369200121</p>
                  </div>
                </div>
                <div className="box flex flex-col items-center mt-8 laptop:mt-0 laptop:w-[25%] w-[400px] h-[400px] bg-white">
                <div className="flex flex-col items-center">
                     <div className="text-[50px] -mt-4 text-light-blue">
                     <ion-icon name="mail"></ion-icon>
                     </div>
                     <h2 className="text-[28px] font-semibold">Our Email</h2>
                     <p className="mt-2">Info@ccforall.co.uk</p>
                  </div>
                </div>
            </div>
            <Footer/>
        </Layout>
    )
}