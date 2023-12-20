import Accordion from "@/app/ui/components/Accordion"
import { dataForMejoraTuPlan } from "@/app/lib/dataForComponents"
import { dataAccordion } from "@/app/lib/definitions"

export default function Page() {
    return (
      <div className="pb-[106px] max-w-[400px] mx-auto sm:w-full lg:ml-0">
        {dataForMejoraTuPlan.map((item: dataAccordion) => {
          return(
            <Accordion
              key={item.title}
              src={item.src}
              title={item.title}
              description={item.description}
            />
          )
        })} 
      </div>   
    )
  }