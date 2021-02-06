import React from 'react';
import Decoration from '../assets/icons/Decoration.svg';
import Signature from '../assets/icons/Signature.svg';
import People from '../assets/image/People.jpg';


const About = () => {
    return (
        <div className="about-container" id="aboutUs">
            <div className="aboutu_us">
                <p>O nas</p>
                <img src={Decoration} alt="decor" className="about_us_decoration" />
                <p className="about_us_text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. 
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={Signature} alt="signature" className="about_us_signature" />
            </div>         
            <img src={People} className="about_us_img" alt="about_us_img" />            
        </div>
    )
}

export default About;