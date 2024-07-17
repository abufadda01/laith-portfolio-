"use client"

import React from 'react'
import CountUp from "react-countup"


const stats = [
    {
        num : 2 ,
        text : "Years of Experience"
    },
    {
        num : 16 ,
        text : "Projects Completed"
    },
    {
        num : 5 ,
        text : "Technologies mastered"
    },
    {
        num : 230 ,
        text : "Code commits"
    },
]




const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-1 xl:pb-1'>

        <div className='container mx-auto'>

            <div className='flex flex-wrap gap-6 max-x-[80vw] mx-auto xl:max-w-none'>

                {stats.map((item , index) => (

                    <div className='flex-1 flex gap-4 items-center justify-center xl:justify-start' key={index}>

                        <CountUp
                            end={item.num}
                            duration={5}
                            delay={2}
                            className='text-4xl xl:text-6xl font-extrabold'
                        />

                        <p className={`${item.text.length < 15 ? "max-x-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>

                    </div>

                ))}

            </div>

        </div>

    </section>
  )
}

export default Stats