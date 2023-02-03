import ProjectCollection from 'classes/ProjectCollection';
import BlueberryFestivalScreen from 'screens/portfolio/BlueberryFestivalScreen';
import CraigslistRedesignScreen from 'screens/portfolio/CraigslistRedesignScreen';
import DigitalAnimationScreen from 'screens/portfolio/DigitalAnimationScreen';
import FRCScouterScreen from 'screens/portfolio/FRCScouterScreen';
import LudumDare46Screen from 'screens/portfolio/LudumDare46Screen';
import NoCartoonsScreen from 'screens/portfolio/NoCartoonsScreen';
import SpencerWebsiteScreen from 'screens/portfolio/SpencerWebsiteScreen';
import USOpenScreen from 'screens/portfolio/USOpenScreen';

/**
 * An instance of the `ProjectCollection` class that contains references to every public portfolio project.
 */
const PortfolioEntries = new ProjectCollection([
    {
        data: require('projects/BlueberryFestival/data.json'),
        images: {
            featuredImage: require('projects/BlueberryFestival/featured-cover.png'),
            thumbnailImage: require('projects/BlueberryFestival/small-cover.png')
        },
        component: BlueberryFestivalScreen
    },
    {
        data: require('projects/SpencerWebsite/data.json'),
        images: {
            featuredImage: require('projects/SpencerWebsite/featured-cover.png'),
            thumbnailImage: require('projects/SpencerWebsite/small-cover.png')
        },
        component: SpencerWebsiteScreen
    },
    {
        data: require('projects/LudumDare46/data.json'),
        images: {
            featuredImage: require('projects/LudumDare46/featured-cover.png'),
            thumbnailImage: require('projects/LudumDare46/small-cover.png')
        },
        component: LudumDare46Screen
    },
    {
        data: require('projects/DigitalAnimation/data.json'),
        images: {
            featuredImage: require('projects/DigitalAnimation/featured-cover.png'),
            thumbnailImage: require('projects/DigitalAnimation/small-cover.png')
        },
        component: DigitalAnimationScreen
    },
    {
        data: require('projects/NoCartoons/data.json'),
        images: {
            featuredImage: require('projects/NoCartoons/featured-cover.png'),
            thumbnailImage: require('projects/NoCartoons/small-cover.png')
        },
        component: NoCartoonsScreen
    },
    {
        data: require('projects/USOpen/data.json'),
        images: {
            featuredImage: require('projects/USOpen/featured-cover.png'),
            thumbnailImage: require('projects/USOpen/small-cover.png')
        },
        component: USOpenScreen
    },
    {
        data: require('projects/FRCScouter/data.json'),
        images: {
            featuredImage: require('projects/FRCScouter/featured-cover.png'),
            thumbnailImage: require('projects/FRCScouter/small-cover.png')
        },
        component: FRCScouterScreen
    },
    {
        data: require('projects/CraigslistRedesign/data.json'),
        images: {
            featuredImage: require('projects/CraigslistRedesign/featured-cover.jpg'),
            thumbnailImage: require('projects/CraigslistRedesign/small-cover.jpg')
        },
        component: CraigslistRedesignScreen
    }
]);

export default PortfolioEntries;