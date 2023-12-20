'use client';
import { dataLink } from "@/app/lib/definitions";
import Link from "next/link";
import { lato } from "../fonts";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
    { 
        name: 'PROTEGE A TU AUTO', 
        href: '/yourplan'
    },
    {
        name: 'PROTEGE A LOS QUE TE RODEAN',
        href: '/yourplan/protec-everybody'
    },
    { 
        name: 'MEJORA TU PLAN', 
        href: '/yourplan/improveyourplan'
    }
  ] as dataLink[];
  
  export default function NavLinks() {
    const pathname = usePathname();
    return (
      <nav className={`${lato.className} antialiased font-normal not-italic text-[#494F66] max-w-[400px] flex itmes-center justify-center flex-col mx-auto lg:mt-14 lg:ml-0`}>
        <h3 className="ml-8 mb-8 text-[20px] leading-7">Agrega o quita coberturas</h3>
        <div className="flex w-full justify-between items-start">
          {links.map((link) => {
            return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    'text-[10px] font-bold leading-4 tracking-[0.8px] w-1/3 text-center pb-7 cursor-pointer h-full  border-b-2 border-[#D7DBF5]',
                    {
                      'text-green-600 border-b-3 border-green-600': pathname === '/yourplan' && link.name === 'PROTEGE A TU AUTO' ||  pathname === '/yourplan/protec-everybody' && link.name === 'PROTEGE A LOS QUE TE RODEAN' ||  pathname === '/yourplan/improveyourplan' && link.name === 'MEJORA TU PLAN',
                      'px-7': link.name === 'PROTEGE A TU AUTO',
                      'px-4': link.name === 'PROTEGE A LOS QUE TE RODEAN',
                      'px-8': link.name === 'MEJORA TU PLAN',
                    }
                  )}
                  
                >
                  {link.name}
                </Link>
            );
          })}
        </div>
      </nav>
    );
  }

  