import React, { useEffect, useRef, useState } from 'react';
import styles from "./Carousel.module.css";
import image1 from "../img/1.webp"
import image2 from "../img/2.webp"
import image3 from "../img/3.webp"

function Carousel() {
    const[count,setCount]=useState(1);
    const inputref=useRef();
    const images = require.context('../img', true);
    // let dynamicImage = images(`./${count}.webp`);

    useEffect(()=>{
        setTimeout(()=>{
            if(count==3)
            {
                setCount(1)
            }
            else{
            setCount(count+1)
            }
        },2000)
    },[count])
    console.log(count);
    // console.log(inputref.current);
    const imgclass=count===1? "active":"notactive";
    const imgclass2=count===2? "active":"notactive";
    const imgclass3=count===3? "active":"notactive";

  return (
            <div className={styles.carouselContainer}>
                <img src={image1} className={`images ${imgclass}`} ref={inputref} alt="images"/>
                <img src={image2} className={`images ${imgclass2}`}  ref={inputref} alt="images"/>
                <img src={image3} className={`images ${imgclass3}`}  ref={inputref} alt="images"/>
               
            </div>
         )
  
}

export default Carousel;
