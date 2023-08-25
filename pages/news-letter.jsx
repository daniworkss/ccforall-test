import Layout from "./components/Layout"
import Footer from "./components/Footer"
import { useState } from "react";
import Link from "next/link";
export default function Newsletter(){
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
  
   
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here, you can add code to handle form submission,
      // such as sending the email to a server for subscription.
      // For this example, let's just set the 'subscribed' state to true.
      setSubscribed(true);
    };
    return(
        <Layout>
            <div className=' bg-darknavyblue w-full h-screen justify-center items-center flex'>
            <div className="form-container bg-white w-[90%] h-[500px] tablet:w-[70%] laptop:w-[35%] laptop:h-[600px] rounded-[10px]">
               <div className="form-content h-[450px] laptop:h-[500px] flex justify-center items-center flex-col ">
               <h2 className="pt-8 text-[26px] font-semibold text-center mb-8">Newsletter Subscription</h2>
                
               {
                subscribed ?(
                    <div>
                        <div className="text-light-blue text-[120px] w-full flex justify-center">
                       <ion-icon name="checkmark-circle"></ion-icon>
                       </div>
                     <p className="mt-2 font-semibold">You have subscribed to our newsletter!</p>
                       <div className="w-full flex justify-center">
                       <Link className=" underline text-light-blue mt-4 text-center" href={'/home'}>
                       Click here to go to the homepage
                    </Link>

                       </div>
                    
                    </div>
                    
                ) :(
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                      placeholder="Email Address"
                        type="email"
                        className="form border-[2px] border-light-blue text-darknavyblue w-[300px] tablet:w-[450px] h-[70px] rounded-[10px] text-[20px] pl-2"
                        id="email"
                        value={email}
                        onChange={e => setEmail( e.target.value) }
                        required
                      />
                    </div>
                   <div className="flex w-full justify-center mt-8">
                   <button type="submit" className="bg-light-blue text-white w-[150px] h-[60px] text-[20px] rounded-[5px] font-semibold hover:bg-white hover:text-light-blue transition-all duration-[.3s] ease-in-out">
                      Subscribe
                    </button>
                   </div>
                  </form> 
                )
               }
               </div>
            </div>
        </div>
          <Footer/>
        </Layout>
    )
}