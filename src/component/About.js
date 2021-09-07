import React from 'react'
import IMAGEONE from '../assets/Rectangle8.png'
import IMAGETHREE from '../assets/Rectangle9.png'
import IMAGETWO from '../assets/Rectangle10.png'

const About = () => {
    return (
        <div className="about_container section">
            <div className="about_image">
                <div className="about_image_sec1">
                    <img src={IMAGEONE} alt="" />
                    <img src={IMAGETWO} alt="" />
                </div>
                <div className="about_image_sec2">                    
                    <img src={IMAGETHREE} alt="" />
                </div>
            </div>
            <div className="about_company_content">                
                <h1>ABOUT COMPANY</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus placeat molestias quia earum vel ipsum optio molestiae nemo ut sit harum obcaecati suscipit, alias quae voluptatum eius fugiat ducimus corporis commodi nostrum deserunt! Ab reiciendis nemo distinctio tempore labore asperiores, deleniti iusto minus vero, nisi quibusdam, iure velit. Eum!</p>
                <button>TAKE A LOOK! <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}

export default About
