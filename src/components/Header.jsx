import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import morning from '.././images/morningEdition.svg';
import analysis from '.././images/analysis.jpg'
import picks from '.././images/picks.jpg'
import climate from '.././images/climate.jpg'
import good_news from '.././images/good-news.jpg'

// const baseURL1 ='https://newsapi.org/v2/top-headlines?country=us&';
// const baseURL2 = 'https://newsapi.org/v2/everything?';
const baseURL1 ='';
const baseURL2= '';
// const query1 = `${query}`

const APIKEY ='97a1364149ad490495fc8183ec7e646c';
const requestURL=`${baseURL1}apiKey=${APIKEY}`
// const requestURL2=`${baseURL2}q=gists&apiKey=${APIKEY}`

const Header = () => {
  const [head, setHead] = useState('');
  const[title, setTitle] = useState('');
  const [image1, setImage1]= useState('');
  const [image2, setImage2]= useState('');
  const [image3, setImage3]= useState('');
  const [image4, setImage4]= useState('');
//   const [query, setQuery] = useState(''); 
  const [greeting, setGreeting]= useState('');
  const [currentDate, setCurrentDate] = useState(moment().format('dddd, [the] Do [of] MMMM'));
  
    // const[isHovered, setIsHovered] =useState(false)
  useEffect(() =>{
    axios.get(requestURL)
      .then((response) => {
        if (response.data.articles && response.data.articles.length > 0){
            setHead(response.data.articles[0].urlToImage)
            setTitle(response.data.articles[0].title)
        }
        if(response.data.articles[0].urlToImage === null){
            setHead(response.data.articles[1].urlToImage)
            setTitle(response.data.articles[1].title)
        }else if(response.data.articles[1].urlToImage === null){
            setHead(response.data.articles[2].urlToImage)
            setTitle(response.data.articles[2].title)
        }else{
            setHead(response.data.articles[3].urlToImage)
            setTitle(response.data.articles[3].title)
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // console.log(baseURL)
      });
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
        try {
            const [picksResponse, goodNewsResponse, analysisResponse, climateResponse] = await Promise.all([
                axios.get(`${baseURL2}q=tech&apiKey=${APIKEY}`),
                axios.get(`${baseURL2}q=goodNews&apiKey=${APIKEY}`),
                axios.get(`${baseURL2}q=analysis&apiKey=${APIKEY}`),
                axios.get(`${baseURL2}q=climate&apiKey=${APIKEY}`)
            ]);

            if (picksResponse.data.articles && picksResponse.data.articles.length > 0) {
                setImage1(picksResponse.data.articles[0].urlToImage);
            }

            if (goodNewsResponse.data.articles && goodNewsResponse.data.articles.length > 0) {
                setImage2(goodNewsResponse.data.articles[0].urlToImage);
            }

            if (analysisResponse.data.articles && analysisResponse.data.articles.length > 0) {
                setImage3(analysisResponse.data.articles[0].urlToImage);
            }

            if (climateResponse.data.articles && climateResponse.data.articles.length > 0) {
                setImage4(climateResponse.data.articles[0].urlToImage);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            // Handle error
        }
    };

    const delay = 10000; // 10 seconds delay between requests
    const fetchWithDelay = async () => {
        await fetchArticles();
        await new Promise(resolve => setTimeout(resolve, delay)); // Wait for the delay
    };

    fetchWithDelay(); // Initial fetch

    // Cleanup function if needed
    return () => {
        // Cleanup code here
    };
}, []);


  



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(moment().format('dddd, [the] Do [of] MMMM'));
      updateGreeting();
    }, 86400000); // Update every day (24 hours in milliseconds)
    
    updateGreeting();
    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

    const updateGreeting= ()=>{
        const hour = new Date().getHours();
        if(hour>=0 && hour < 12){
            setGreeting('Good morning');
        }else if(hour >=12 && hour <17){
            setGreeting('Good afternoon');
        }else{
            setGreeting('Good evening')
        }
    }
    
  return (
    <div className='/px-[192px] p-[24px] grid grid-cols-2 gap-[16px] /h-[512px] '>
      <div
        className='/w-[736px] px-[28px] pt-[40px] pb-[28px] headBg'
        style={{ backgroundImage: `url(${head})` }}
       

      >
        <div className='mb-[74px] inside'>
          <img src={morning} alt='' width={365} height={50} />
          <h2 className='font-bold text-[24px] leading-[32px] text-[#FFFFFF]'>
            {currentDate}
          </h2>
        </div>

        <div className='morning-text flex gap-[8px] flex-col justify-start items-start text-[#FFFFFF] inside'>
          <p>
            {greeting}, <br className='mb-[8px]' />
            At the top of the news,{' '}
            {title}
          </p>

          <p>
            Also in the digest...
            {' Black Hole, Team 0, and Michael Jackson.'}
          </p>

          <p>{'Read to win'}</p>

          <p>- The inkl team</p>

          <a
            href='ht'
            className='px-[48px] py-[16px] bg-[#ED5503] text-[#FFFFFF] rounded-[9999px] font-bold text-[24px] leading-[32px] text-center mt-[20px]'
          >
            Read today’s edition
          </a>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-[8px]  text-[#ffffff] selection'>
        <div className='grid grid-rows-3 gap-[8px] text-[#ffffff]'>
            
          <img src={image1} alt=''  />
          <a href='/' className='bg-[#FF5B03] py-[32px] px-[8px] text-center'>
                Our Picks
            </a>
          <img src={picks} alt='' />
          
        </div>

        <div className='text-[#FFFFFF] grid grid-rows-3 gap-[8px]'>
          

          

            <img src={image2} alt='' />

          <a href='/' className='bg-[#787878] py-[32px] px-[8px] text-center'
        //    onClick={()=>handleQueryChange('analysis')}
          >
            Analysis
          </a>
          <img src={analysis} alt='' />


          

          
        </div>

        <div className='grid grid-rows-3 gap-[8px]'>
            
            <img src={image3} alt='' />
          <a href='/' className='bg-[#4C6778] py-[32px] px-[8px] text-center'>
                Good News
            </a>
            <img src={good_news} alt='' />
        </div>

        <div className='grid grid-rows-3 gap-[8px]'>
            
            <img src={image4} alt='' />
          <a href='/' className='bg-[#141E28] py-[32px] px-[8px] text-center'>
                Climate
            </a>
            <img src={climate} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Header;
