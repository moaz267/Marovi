import React from 'react'
import SliderComponent from '../../components/Slider/Slider'
import SlideNav from '../../components/NavSlider/NavSlider'
import Collection from '../../components/Collection/Collection'
import Footer  from '../../components/Footer/Footer'
export default function Home() {
  return (<>
  <div className="mpage">
  <SliderComponent />
  </div>
  
    <div className="home">
    <SlideNav/>
    <Collection/>
    <Footer />
    </div>
    
  </>
  )
}


