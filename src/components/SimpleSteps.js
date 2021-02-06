import React from 'react'
import icon1 from '../assets/icons/Icon-1.svg';
import icon2 from '../assets/icons/Icon-2.svg';
import icon3 from '../assets/icons/Icon-3.svg';
import icon4 from '../assets/icons/Icon-4.svg';
import Decoration from '../assets/icons/Decoration.svg';
import {Link} from 'react-router-dom';

const SimpleSteps = () => {
    return (
        <div className="simple_steps_container" id="simpleSteps">
            <div className="simple_steps_top">
                <p className="simple_steps_top_text">Wystarczą 4 proste kroki</p>
                <img src={Decoration} alt="decor" className="simple_steps_top_decoration" />
            </div>
            <div className="simple_steps_middle">
                <div className="simple_steps_middle_align">
                    <img src={icon1} alt="ic1" className="simple_steps_middle_decoration" />
                    <p className="simple_steps_middle_underlined">Wybierz rzeczy</p>
                    <div className="simple_steps_middle_underlined-underline"></div>
                    <p className="simple_steps_middle_bottom_text">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="simple_steps_middle_align">
                    <img src={icon2} alt="ic2" className="simple_steps_middle_decoration" />
                    <p className="simple_steps_middle_underlined">Spakuj je</p>
                    <div className="simple_steps_middle_underlined-underline"></div>
                    <p className="simple_steps_middle_bottom_text">skorzystaj z worków na śmieci</p>
                </div>
                <div className="simple_steps_middle_align">
                    <img src={icon3} alt="ic3" className="simple-steps_middle_decoration" />
                    <p className="simple_steps_middle_underlined">Zdecyduj komu chcesz pomóc</p>
                    <div className="simple_steps_middle_underlined-underline"></div>
                    <p className="simple_steps_middle_bottom-text">wybierz zaufane miejsce</p>
                </div>
                <div className="simple_steps_middle_align">
                    <img src={icon4} alt="ic4" className="simple_steps_middle_decoration" />
                    <p className="simple_steps_middle_underlined">Zamów kuriera</p>
                    <div className="simple_steps_middle_underlined-underline"></div>
                    <p className="simple_steps_middle_bottom-text">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="simple-steps-bottom">
                <Link to="/logi" className="btn-simple-steps_button" >oddaj rzeczy</Link>
            </div>
        </div>
    )
}

export default SimpleSteps;