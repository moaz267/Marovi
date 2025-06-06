import React from 'react'
import ModernButton from '../ModernButton/ModernButton'
import { Link } from 'react-router-dom'
export default function WrapperSlider({src,text,p}) {
  return (
    <div className="container">
        <div className="img">
            <img src={src} alt=""/>
        </div>
        <div className="layout">
            <div className="text">
                <h2>{text}</h2>
                <p>{p}</p>
            </div>
            <div className="btn">
                {/* <button className="btn1">FIND OUT MORE </button> */}
                <Link to={"/pages"} >
                <ModernButton /> 
                </Link>
            </div>
        </div>
    </div>
  )
}
