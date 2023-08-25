import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}){
    return(
        <>
          <div className="w-full h-screen">
            <Header/>
            <div className="-mt-[.6rem] laptop:-[.6rem]">{children}</div>
          </div>


         
        </>
       
    )
}