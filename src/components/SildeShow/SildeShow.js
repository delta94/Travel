import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from './../../images/thum1.jpg'
import img2 from './../../images/thum2.jpg'
import img3 from './../../images/thum3.jpg'
import styles from './SlideShow.scss';


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    
}
class Slideshow extends React.Component {
    render(){
    return (
        <div className={styles.containerSlide}>
            <Slide {...proprietes}>
                <div className={styles.eachSlide}>
                    <div>
                        <img src={img1} alt="img1" />
                    </div>
                </div>
                <div className={styles.eachSlide}>
                    <div>
                        <img src={img2} alt="img2" />
                    </div>
                </div>
                <div className={styles.eachSlide}>
                    <div>
                        <img src={img3} alt="img3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}
}

export default Slideshow;