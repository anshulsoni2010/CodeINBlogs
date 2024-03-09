import React, { useEffect, useState } from 'react';
import DummyLogo from './image/download.png';
const PartnerSlider = () => {
    const speedFactor = 2; //speed
    const [numItems, setNumItems] = useState(0);

    useEffect(() => {
        const div = document.querySelector('.scroll div');
        if (div) {
            const spans = div.querySelectorAll('span');
            const count = spans.length;
            console.log("Number of items:", count); 
            setNumItems(count);
        }
    }, []);

    const speedTime = `${numItems * speedFactor}s`;

    const styles = {
        '--time': speedTime
    };

    return (
        
        <center>
            <span className='SectionHeading text-[14px] md:text-[20px] 2xl:text-[clamp(20px,1.5vw+0.4rem,40px)] 2xl:leading-[110%]'>PARTNERS</span>
            <div className="scroll" style={styles}>
                <div>
                    <span className='imgBox'><img src={DummyLogo} alt="" /></span>
                    <span className='imgBox'><img src={DummyLogo} alt="" /></span>
                    <span className='imgBox'><img src={DummyLogo} alt="" /></span>
                    <span className='imgBox'><img src={DummyLogo} alt="" /></span>
                    <span className='imgBox'><img src={DummyLogo} alt="" /></span>
                    <span className='imgBox'><img src={DummyLogo} alt="" /></span>
                    <span className='imgBox'><img src={DummyLogo} alt="" /></span>
                </div>
                <div>
                    <span className='imgBox'><img src={DummyLogo} alt="" /></span>
                    <span className='imgBox'><img src={DummyLogo} alt="" /></span>
                    <span className='imgBox'><img src={DummyLogo} alt="" /></span>
                    <span className='imgBox'><img src={DummyLogo} alt="" /></span>
                    <span className='imgBox'><img src={DummyLogo} alt="" /></span>
                    <span className='imgBox'><img src={DummyLogo} alt="" /></span>
                    <span className='imgBox'><img src={DummyLogo} alt="" /></span>
                </div>
            </div>
        </center>
    );
};

export default PartnerSlider;
