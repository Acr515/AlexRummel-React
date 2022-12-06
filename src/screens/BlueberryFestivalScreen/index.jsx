import React from 'react';
import PortfolioHeader from 'components/PortfolioHeader';
import Section from 'components/Section';
import PortfolioEntries from 'config/PortfolioEntries';
import WideImage from 'projects/BlueberryFestival/assets/physical-phone.jpeg';
import NarrowImage from 'projects/BlueberryFestival/assets/harbor.jpg';
import './style.scss';

export default function BlueberryFestivalScreen() {
    return (
        <div className="_BlueberryFestivalScreen _Screen">
            <PortfolioHeader 
                entry={PortfolioEntries.getProject("blueberry-festival")}
                wideImage={WideImage}
                narrowImage={NarrowImage}
            />
            <Section>
                <h2>Introduction</h2>
            </Section>
        </div>
    )
}