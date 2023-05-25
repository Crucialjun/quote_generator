'use client'
import React, {useState} from 'react'

//Components Imports
import { BackgroundImage1,BackgroundImage2, FooterCon, FooterLink, GenerateQuoteButton, GenerateQuoteText, GradientBackgroundCo, QuoteGeneretorContainer, QuoteGeneretorInnerContainer, QuoteGeneretorSubTitle, QuoteGeneretorTitle } from '@/components/quote_generator/QuoteGeneratorElement'

//Assets Import
import cloud1  from "../assets/cloud-and-thunder.png";
import cloud2  from "../assets/cloudy-weather.png";


export default function Home() {
  const [numberOfQuotes, setNumberofQuotes] = useState<Number | null >(0)
  return (

      <GradientBackgroundCo>
        <QuoteGeneretorContainer>
          <QuoteGeneretorInnerContainer>
            <QuoteGeneretorTitle>
              Daily Inspiration Generator
              <QuoteGeneretorSubTitle>
                Looking for a splash of inspiration? Generate a quote card with a random inspiration
                quote provided by 
                <FooterLink
                href="google.com"  
                rel = "noopener noreferrer" 
                target='_blank'> Zen Quotes API
                  
                </FooterLink>
              </QuoteGeneretorSubTitle>
              <GenerateQuoteButton>
                <GenerateQuoteText>
                  Make a quote
                </GenerateQuoteText>
              </GenerateQuoteButton>
            </QuoteGeneretorTitle>
          </QuoteGeneretorInnerContainer>
        </QuoteGeneretorContainer>
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
