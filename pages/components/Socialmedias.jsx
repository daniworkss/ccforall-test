import Link from "next/link"
export default function Socails(){
    return(
        <div className="socials h-[50px] flex gap-[15px]">
            <Link href={'/'} className="text-5xl text-white transition-colors duration-200 ease-in hover:text-blue-600">
            <ion-icon name="logo-facebook"></ion-icon> 
            </Link>

            <Link href={'/'} className="text-5xl text-light-blue transition-colors duration-200 ease-in hover:text-blue-400">
            <ion-icon name="logo-twitter"></ion-icon> 
            </Link>

            <Link href={'/'} className="text-5xl text-white transition-colors duration-200 ease-in hover:text-blue-500">
            <ion-icon name="logo-linkedin"></ion-icon> 
            </Link>

            <Link href={'/'} className="text-5xl text-light-blue transition-colors duration-200 ease-in hover:text-dark-orange">
            <ion-icon name="logo-instagram"></ion-icon> 
            </Link>
        </div>
    )
}