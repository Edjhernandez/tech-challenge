'use client';
import Image from "next/image"
import { roboto, lato } from "../fonts"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from 'clsx';

const Navbar = () => {
    const pathname = usePathname()
return (
    <header className={clsx(
        'flex justify-between items-center bg-bgrimac1 fixed lg:bg-transparent z-10 top-0  h-14 py-4 w-full max-w-screen-2xl mx-auto',
        {
            'bg-white border-b border-[#EDEFFC]': pathname === '/yourplan' || pathname === '/yourplan/protec-everybody' || pathname === '/yourplan/improveyourplan' || pathname === '/thanks',  
            'lg:bg-white border-b border-[#EDEFFC]': pathname === '/yourplan' || pathname === '/yourplan/protec-everybody' || pathname === '/yourplan/improveyourplan' || pathname === '/thanks',
        }
    )}>
        <h2
            className={`${lato.className} text-xl text-green-600 ml-8 font-black tracking-[-0.1em] drop-shadow-xl lg:ml-32 text-4xl`}
        >
            CarInsurance
        </h2>
        <div className="flex items-center py-4 h-full">
            <p className={`${roboto.className} antialiased hidden lg:block text-[#676F8F] text-xs mr-5 leading-5 tracking-[0.2px]`}>¿Tienes alguna duda?</p>
            <Image 
                src='/images/phone.svg'
                alt="phone call us"
                width={20}
                height={20}
            />
            <p className={`${roboto.className} antialiased text-textllamanos mr-8 text-right text-sm/6 lg:hidden`}>Llámanos</p>
            <Link href={'#'} className={`${roboto.className} antialiased text-textllamanos mr-8 text-right text-sm/6 hidden lg:block lg:mr-32`}>(00) 555 5555</Link>
        </div>
    </header>
)
}

export default Navbar