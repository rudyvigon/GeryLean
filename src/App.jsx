import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoTicker from './components/InfoTicker';
import Countdown from './components/Countdown';
import Details from './components/Details';
import DressCode from './components/DressCode';
import Gallery from './components/Gallery';
import Gifts from './components/Gifts';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <InfoTicker />
            <Countdown />
            <Details />
            <DressCode />
            <Gallery />
            <Gifts />
            <RSVP />
            <Footer />
        </div>
    );
}

export default App;
