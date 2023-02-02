import React from 'react';
import Navv from './Navv';
import "./style.css";

const Video = () => {
  
  return (

    <div className='container'>
      <Navv/>
        <div  style={{margin:"10vw"}}>
        <div className='row'>
        <div className='col-4'><iframe src='assami.mp4'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'/>
        <button>Download Assami</button></div>
        <div className='col-4'><iframe src='assami.mp4'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'/>
        <button>Download Assami</button></div>
        <div className='col-4'><iframe src='assami.mp4'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'/>
        <button>Download Assami</button></div>
        <div className='col-4'><iframe src='assami.mp4'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'/>
        <button>Download Assami</button></div>
        <div className='col-4'><iframe src='assami.mp4'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'/>
        <button>Download Assami</button></div>
        <div className='col-4'><iframe src='assami.mp4'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'/>
        <button>Download Assami</button></div>
        </div>
        </div>
      
    </div>
  )
}

export default Video
