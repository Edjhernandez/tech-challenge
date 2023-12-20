'use client'
import { lato } from "../fonts"
import { dataForProtegeATuAuto } from "@/app/lib/dataForComponents"
import Accordion from "./Accordion"

const Coverages = () => {
    return(
        <section className={`${lato.className} antialiased font-normal not-italic mb-[106px]`}>
            <h3 className="ml-8 text-[20px] text-[#494F66] leading-7">Agrega o quita coberturas</h3>
            {dataForProtegeATuAuto.map((item) => {
          return(
            <Accordion
              key={item.title}
              src={item.src}
              title={item.title}
              description={item.description}
            />
          )
        })}  
        </section>
    ) 
}

export default Coverages 

