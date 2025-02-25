"use client";
import Image from 'next/image'
import React from 'react'
import { Sigmar } from 'next/font/google';
import { Button } from './ui/button';
import Link from 'next/link';
import { Cross, Github, Linkedin, Menu } from 'lucide-react';

const sigmar = Sigmar({ subsets: ['latin'], weight: "400" });
function Navbar() {
    const [menu, setMenu] = React.useState(false)
  return (
    <div className='w-[100vw] sticky top-0 bg-transparen backdrop-blur-sm p-7'>
       {menu&&(
        <div className='absolute z-4 w-[100vw] h-[100vh] top-0 left-0  ' onClick={()=>setMenu(false)}></div>
       )}
        <nav className='grid  grid-cols-2 md:grid-cols-3  w-[100%]'>  
           {/* Icon */}
            <div className='flex items-center justify-start'>
                <Image src='/logo.png' alt='logo' width={50} height={50}/>
                <h1  className={`${sigmar.className} font-bold tracking-wider text-2xl text-[#225f16] flex gap-1`}>Tech <div className='text-[#53b517]'>Dox</div></h1>
            </div>
            {/* menu */}
            <div className='md:flex hidden items-center justify-center w-full '>
                <ul className='flex  bg-[#53b517] items-center justify-center px-3  py-2 rounded-2xl gap-5'> 
                    <li><Button  variant={'ghost'} ><Link className=' font-semibold' href={''} >Home</Link></Button></li>
                    <li><Button  variant={'ghost'} ><Link  className=' font-semibold' href={''} >About</Link></Button></li>
                    <li><Button  variant={'ghost'}><Link className=' font-semibold' href={''} >Contact</Link></Button></li>
                   
                   
                </ul>
            </div>
            {/* socials */}
            <div className='hidden md:flex items-center justify-end'>
                <ul className='flex gap-5 pr-4'>
                    <li className='bg-black dark:border-white border-2 p-3 rounded-full flex items-center justify-center'><a href="https://github.com/TanniTemp" target='_blank'><Github color='white'/></a></li>
                    <li className='bg-[#0a65c3] px-3 py-1  border-2 rounded-full flex items-center justify-center'><a href="https://www.linkedin.com/in/tanishk-dhaka-82aab0217/" target='_blank'><Linkedin color='white'/></a></li>
                   
                </ul>
            </div>
            <div className='flex justify-end items-center md:hidden'>
                <Button onClick={()=>setMenu(true)} size='icon' variant='ghost'><Menu height={80} width={80} /></Button>
                {
                    menu&&(
                       <div className='relative'>
                            
                            <ul className='absolute  z-1 -top-6 right-0 bg-[#53b517] flex flex-col w-[35vw] gap-5 items-center justify-center p-2 rounded-lg'>
                                <li onClick={()=>setMenu(false)} className='flex items-center justify-end w-full' ><Cross className='rotate-45   h-4  w-5' fill='black'/></li>
                                 <li><Button  variant={'outline'} ><Link className=' font-semibold' href={''} >Home</Link></Button></li>
                                 <li><Button  variant={'outline'} ><Link  className=' font-semibold' href={''} >About</Link></Button></li>
                                 <li><Button  variant={'outline'}><Link className=' font-semibold' href={''} >Contact</Link></Button></li>
                                 <li className='flex justify-evenly gap-5'> 
                                    <a className='bg-black dark:border-white border-2 p-2  rounded-full flex items-center justify-center' href="https://github.com/TanniTemp" target='_blank'><Github color='white' height={15}/></a>
                                    <a  className='bg-[#0a65c3]   border-2 p-2 rounded-full flex items-center justify-center' href="https://www.linkedin.com/in/tanishk-dhaka-82aab0217/" target='_blank'><Linkedin color='white' height={15}/></a>
                                  
                                    </li>
                            </ul>
                       </div> 
                    )
                }
            </div>  
        </nav>
    </div>
  )
}

export default Navbar