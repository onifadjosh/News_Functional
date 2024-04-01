import React from 'react';
import moment from 'moment';
import { useState, useEffect } from 'react';
import morning from '.././images/morningEdition.svg';
const Header = () => {

    const [currentDate, setCurrentDate] = useState(moment().format('dddd, [the] Do [of] MMMM'));

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentDate(moment().format('dddd, [the] Do [of] MMMM'));
      }, 86400000); // Update every day (24 hours in milliseconds)
      return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

  return (
    <div className='p-[24px] flex gap-[16px]'>
        <div className='bg-[url(images/today-bg.png)] bg-cover bg-center bg-no-repeat /h-[512px] /w-[736px] px-[28px] pt-[40px] pb-[28px]'>
            <div className='mb-[74px]'>
                <img src={morning} alt="" width={365} height={50} />
                <h2 className='font-bold text-[24px] leading-[32px] text-[#FFFFFF]'>{currentDate}</h2>
            </div>

            <div className='morning-text flex gap-[8px] flex-col justify-start items-start text-[#FFFFFF]'>
                <p>
                    Good morning, <br className='mb-[8px]'/>
                    At the top of the news, {'South Africa’s ex-President Jacob Zuma barred from May elections.'}
                </p>

                <p>
                    Also in the digest...
                    {' Black Hole, Team 0, and Michael Jackson.'}
                </p>

                <p>
                    {'Read to win'}
                </p>

                <p>
                    - The inkl team
                </p>

                <a href="ht" className='px-[48px] py-[16px] bg-[#ED5503] text-[#FFFFFF] rounded-[9999px] font-bold text-[24px] leading-[32px] text-center mt-[20px]'>Read today’s edition</a>
            </div>
        </div>

        <div className='flex flex-col'>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>

            <div className='text-[#FFFFFF] flex gap-[8px]'>
                <a href="h" className='bg-[#FF5B03]'>
                    Our Picks
                </a>

                <a href="h" className='bg-[#787878]'>
                    Analysis
                </a>

                <a href="h" className='bg-[#4C6778]'>
                    Good News
                </a>

                <a href="h" className='bg-[#141E28]'>
                    Climate
                </a>
            </div>

            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default Header