import Pagination from "../ui/components/Pagination"
import Calculation from "../ui/components/Calculation"
import Coverages from "../ui/components/Coverages"
import IWant from "../ui/components/IWant"

export default function Page() {
    return (
      <div>
        <Pagination />
        <Calculation />
        <Coverages />
        <IWant />
      </div>
      )
  }