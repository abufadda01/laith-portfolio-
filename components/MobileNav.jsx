"use client"

import React from 'react'
import {Sheet , SheetContent , SheetTrigger} from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'
import {CiMenuFries} from "react-icons/ci"
import Link from 'next/link'


const links = [
    {
        name : "home" ,
        path : "/"
    },
    {
        name : "services" ,
        path : "/services"
    },
    {
        name : "resume" ,
        path : "/resume"
    },
    {
        name : "work" ,
        path : "/work"
    },
    {
        name : "contact" ,
        path : "/contact"
    },
]



const MobileNav = () => {

    const pathName = usePathname()

  return (
    <Sheet>

        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className='text-[32px] text-accent'/>
        </SheetTrigger>

        <SheetContent className="flex flex-col">

            <div className='mt-32 mb-20 text-center text-2xl '>
                <Link href={"/"}>
                <h1 className='text-4xl font-semibold'>Laith <span className='text-accent'>.</span></h1>
            </Link>
            </div>

            <nav className='flex flex-col justify-center gap-8 items-center'>
                {links.map((link , index) => (
                    <Link className={`${link.path === pathName && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`} key={index} href={link.path}>{link.name}</Link>
                ))}
            </nav>

        </SheetContent>

    </Sheet>
  )
}

export default MobileNav