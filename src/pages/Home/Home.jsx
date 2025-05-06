import React from 'react'
import SliderComponent from '../../components/Slider/Slider'
import SlideNav from '../../components/NavSlider/NavSlider'
import Collection from '../../components/Collection/Collection'
import Decore from '../../components/Decore/Decore'
import Footer  from '../../components/Footer/Footer'
export default function Home() {
  return (<>
  <div className="mpage">
  <SliderComponent />
  </div>
  
    <div className="home">
    <SlideNav/>
    <div className="home_title">The most important product categories</div>
    <Collection/>
    <Decore/>
    <Footer />
    </div>
    
  </>
  )
}


