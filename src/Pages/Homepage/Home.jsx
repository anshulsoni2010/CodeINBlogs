import React from 'react';
import ParnterSlider from './components/parnter-slider';
import Stats from './components/stats.jsx'
import Footer from './components/footer.jsx';
import BenefitsCards from './components/benefits.jsx';
import About from './components/about.jsx'
const HomePage = () => {
    return (
<>
        <ParnterSlider></ParnterSlider>
        <Stats></Stats>
        <BenefitsCards></BenefitsCards>
        <Footer></Footer>
<About></About>
        </>
    );
};

export default HomePage;