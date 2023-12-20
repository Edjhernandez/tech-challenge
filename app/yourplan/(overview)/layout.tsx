'use client'
import Pagination from "@/app/ui/components/Pagination"
import Calculation from '@/app/ui/components/Calculation'
import IWant from "@/app/ui/components/IWant"
import NavLinks from "@/app/ui/components/NavLinks"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
      <div className='lg:flex'>
        <Pagination />
        <div className="w-full">
        <Calculation />
        <div className=" sm:flex sm:flex-col sm:justify-center lg:ml-24">
          <NavLinks />
          {children}
        </div>
        <div className="lg:hidden">
        <IWant />
        </div>
        </div>
      </div>
  )
}