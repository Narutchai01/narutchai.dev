import React from 'react'
import { BsGithub,BsFacebook,BsTwitter } from 'react-icons/bs';



export default function Card() {
    return (
        <div className='overflow-hidden flex flex-col mt-[17rem] bg-[#2A273D] w-[633px] h-64 rounded-lg opacity-90'>
            <div className= 'flex flex-row gap-3 bg-[#18152A] w-full h-7'>
                <div className=' bg-red-600 w-3 h-3 rounded-full my-2 ml-3'></div>
                <div className=' bg-yellow-600 w-3 h-3 rounded-full my-2 ml-1'></div>
                <div className=' bg-green-600 w-3 h-3 rounded-full my-2 ml-1'></div>
            </div>
            <div className='flex flex-col justify-center text-center text-white gap-5 pt-7 '>
                <div className=''>
                    <span className='text-4xl font-bold '>Narutchai Mauensaen</span>
                </div>
                <div className=''>
                    <span className='text-2xl font-bold ' >@partiboi01</span>
                </div>
                <div className='flex flex-row justify-center gap-7 text-3xl text'>
                    <span><a href='https://github.com/Narutchai01'><BsGithub/></a></span>
                    <span><a href="https://www.facebook.com/narutchai.mauensaen/"><BsFacebook/></a></span>
                    <span><a href='https://twitter.com/partiboi01'><BsTwitter/></a></span>
                </div>
            </div>
        </div>
    )
}
