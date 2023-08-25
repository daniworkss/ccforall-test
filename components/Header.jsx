/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
export default function Header(){
    const [openMenu , setOpenmenu] = useState()
    const router = useRouter()
    const {pathname} = router
    // for link line on laptop
    const normalLink = 'nav-links flex items-center relative h-[34px]  mb-[2rem] pb-[2rem] mt-[3rem] laptop:mt-[0] laptop:mb-0 laptop:pb-0 border-b-[2px] border-b-gray-200 laptop:border-b-[0px]'
    const activeLink = 'nav-line bg-light-blue hidden laptop:block w-full h-[3px] absolute bottom-0 right-0 top-[2.5rem]'

    return (
       // eslint-disable-next-line react/react-in-jsx-scope
       <>
       <div className="flex justify-center w-full h-[90px] laptop:h-[120px] bg-darknavyblue">
         <div className="bg-darknavyblue header laptop:h-[110px] h-[90px] w-[100%] fixed top-0 z-10 flex items-center  justify-between pl-6 pr-6 laptop:pl-[3rem] laptop:pr-[3rem] laptop:pt-[0rem]">
          
         {/* logo goes here */}
         <Link href={'/home'} className="-z-10 laptop:-mt-8">
          <h1 className="text-2xl uppercase text-white font-bold">Logo here</h1>   
         </Link>

         <div className={` first-letter:flex items-center mt-4 text-[40px] cursor-pointer  laptop:hidden z-30 ${openMenu ? 'text-darknavyblue':'text-white'}`} onClick={()=> setOpenmenu(!openMenu)}>
         <ion-icon className="transition-all duration-[.5s]"name={openMenu ? 'close': 'menu'} ></ion-icon>
         </div>

         {/* navlinks */}
         <div className={`shadow absolute bg-black w-full h-screen laptop:hidden top-0 left-0 opacity-[30%] -z-10 ${openMenu ? 'block transition-all': 'hidden'}`} onClick={()=> setOpenmenu(!openMenu)}></div>
         <div className={`laptop:static absolute top-[0rem] w-[60%] laptop:w-auto right-0 ${openMenu ? 'translate-x-[0%] transition-all duration-[.3s] ease-in' : 'translate-x-[100%] laptop:translate-x-0 transition-all duration-[.3s] ease-out'}`}>
            <ul className='bg-white laptop:bg-inherit laptop:flex laptop:gap-8  text-[20px] font-semibold laptop:h-auto h-screen w-[100%] laptop:pl-0 pl-8 pt-[8rem] laptop:pt-0 '>
                <Link href={'/care-services'} className={normalLink}>
                    <p className={`${pathname.includes('/care-services') ? 'text-light-blue  laptop:text-white': 'text-darknavyblue laptop:text-white'}`}>Care Services</p>
                    <div className={pathname.includes('/care-services') ? activeLink : 'hidden'}></div>
                </Link>
                <Link href={'/about-us'} className={normalLink}>
                   <p className={`${pathname.includes('/about-us') ? 'text-light-blue  laptop:text-white': 'text-darknavyblue laptop:text-white'}`}>About Us</p>
                    <div className={pathname.includes('/about-us') ? activeLink : 'hidden'}></div>
                </Link>
                <Link href={'/useful-information'} className={normalLink}>
                    <p className={`${pathname.includes('/useful-information') ? 'text-light-blue  laptop:text-white': 'text-darknavyblue laptop:text-white'}`}>Useful Information</p>
                    <div className={pathname.includes('/useful-information') ? activeLink : 'hidden'}></div>
                </Link>
                <Link href={'/contact-us'} className={normalLink}>
                   <p className={`${pathname.includes('/contact-us') ? 'text-light-blue  laptop:text-white': 'text-darknavyblue laptop:text-white'}`}>Contact us</p>
                    <div className={pathname.includes('/contact-us') ? activeLink : 'hidden'}></div>
                </Link>
            </ul>

            
         </div>
        
        </div>
       </div>
       </>
       

    )
}