'use client'
import React, {useState} from 'react'

//Components Imports
import { BackgroundImage1,BackgroundImage2, FooterCon, FooterLink, GradientBackgroundCo } from '@/components/quote_generator/QuoteGeneratorElement'

//Assets Import
import cloud1  from "../assets/cloud-and-thunder.png";
import cloud2  from "../assets/cloudy-weather.png";


export default function Home() {
  const [numberOfQuotes, setNumberofQuotes] = useState<Number | null >(0)
  return (

      <GradientBackgroundCo>
        
        <BackgroundImage1
          src={cloud1}
          height={300}
          alt='cloudybackground1'/>
          <BackgroundImage2
          src={cloud2}
          height={300}
          alt='cloudybackground2'/>
          <FooterCon>
            <>
            Quotes Generated : {numberOfQuotes}
            <br>
            </br>
            Developed with love by 
            <FooterLink 
              href="google.com"  
              rel = "noopener noreferrer" 
              target='_blank'> @Crucialjun </FooterLink> 
            </>
            

          </FooterCon>
        
      </GradientBackgroundCo>
      

  )
}
