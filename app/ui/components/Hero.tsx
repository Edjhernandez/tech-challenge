'use client'
import { lato } from "../fonts"
import './stylescomponents.css'
import { roboto } from "../fonts"
import Image from "next/image"

const Hero = () => {
    return(
        <div className="lg:w-2/5 lg:bg-[url('/images/Group15764.png')] lg:bg-cover lg:h-screen">
            <section className="mt-14">
                <Image 
                    src='/images/MaskGroupdesk.svg'
                    alt="mask group desktop"
                    width={320}
                    height={250}
                    className="hidden lg:block lg:mt-[170px] lg:ml-[32.5%]"
                />
                <div className="bg-bgrimac1 lg:bg-transparent lg:ml-[20%] xl:ml-[27.5%] pl-8 pt-10 pb-14">
                    <p className={`${lato.className} antialiased text-left text-xs2 font-bold leading-4 tracking-wider uppercase text-nuevo font-feature mb-2 lg:text-sm lg:tracking-[0.4px]`}>¡nuevo!</p>
                    <div className={`${lato.className} antialiased text-left text-xl lg:text-4xl font-normal leading-9 lg:leading-[48px] tracking-theh1 lg:tracking-[-.2px] text-nuevo font-feature flex`}>
                        <h1>Seguro</h1>
                        <h1 className="ml-2 lg:text-green-600">Vehicular</h1>
                    </div>   
                    <h1 className={`${lato.className} antialiased text-left text-xl lg:text-4xl font-normal leading-9 lg:leading-[48px] tracking-theh1 lg:tracking-[-.2px] text-green-600 font-feature mb-3`}>Tracking</h1>
                    <p className={`${roboto.className} antialiased text-[#676F8F] text-sm leading-6 w-44 lg:w-[270px]`}>Cuentanos donde le haras seguimiento a tu seguro</p>
                </div>        
                <Image 
                    src='/images/MaskGroup.svg'
                    alt="MaskGroup image"
                    width={112}
                    height={276}
                    className="block lg:hidden absolute right-0 z-10 top-14"
                />
                
            </section>
        </div>
    )
}

export default Hero