
import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6"

import { Button } from './ui/button'
import { footerData } from '../helpers/infoFooter';

const Footer = () => {
    const [isDesktop, setIsDesktop] = useState(false);

  // Detectar cambios de tamaño de pantalla
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    // Comprobar al montar
    checkScreenSize();

    // Escuchar cambios de tamaño
    window.addEventListener("resize", checkScreenSize);

    // Limpiar listener al desmontar
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className='border-t-2 border-[#31292942]'>
        <div className='flex flex-col'>
            {/* Branch */}
            <div className="flex justify-between w-full mt-4">
                <div className='w-[60px] h-auto'>
                    <img src="./assets/logoazul.png" alt="" />
                </div>
                <div className='flex gap-2'>
                    <Button>DE</Button>
                    <Button>EN</Button>
                </div>
            </div>
            {/* Menubar with all information */}
            <div className='flex flex-col xl:flex-row'>
                <div className='w-full xl:w-full my-4 py-4  '>
                
                    {
                        isDesktop ? (
                            <footer className="bg-black text-white px-6 py-10">
                                <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                                    {footerData.map((section, index) => (
                                    <div key={index}>
                                        <h4 className="font-semibold mb-3">{section.title}</h4>
                                        <ul className="space-y-1 text-sm text-gray-300">
                                        {section.links.map((link, idx) => (
                                            <li key={idx}>
                                            <a href="#" className="hover:underline">
                                                {link}
                                            </a>
                                            </li>
                                        ))}
                                        </ul>
                                    </div>
                                    ))}
                                </div>
                                </footer>
                        ): (
                            
                    <Accordion type="multiple" className='bg-transparent'>
                        {footerData.map((section, index) => (
                            <AccordionItem value={`index-${index}`} className='my-2 rounded-xl border-none py-2 px-4 bg-[#31292942]'>
                                <AccordionTrigger className='text-white hover:no-underline'> { section.title }</AccordionTrigger>                            
                                    <AccordionContent className='text-white' key={index}>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                    {section.links.map((link, idx) => (
                                        <li key={idx}>
                                        <a href="#" className="hover:underline">
                                            {link}
                                        </a>
                                        </li>
                                    ))}
                                    </ul>
                                    </AccordionContent>                        
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        )
                    }
                </div>
            </div>
            {/* Social Media */}
            <div className='flex flex-col mt-5'>
                    <div className='flex justify-center gap-4'>
                        <FaInstagram className="w-5 h-5 text-white" />
                        <FaFacebook className="w-5 h-5 text-white" />
                        <FaTiktok className="w-5 h-5 text-white" />
                        <FaYoutube className="w-5 h-5 text-white" />
                        <FaXTwitter className="w-5 h-5 text-white" />
                    </div>
                    <div className='flex flex-col pb-24 pt-4 lg:py-4'>
                        <div className='flex justify-center'>
                            <p className='text-gray-300/[50%] text-sm'>Oz Cinemas Germany © 2025</p>
                        </div>
                        <div className='flex justify-center'>
                            <p className='text-gray-300/[50%]'>All rights reserved ® </p>
                        </div>
                    </div>
            </div>
        </div> 
    </div>
  )
}

export default Footer