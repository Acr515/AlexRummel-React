import ProjectCollection from 'classes/ProjectCollection';
import BlueberryFestivalScreen from 'screens/portfolio/BlueberryFestivalScreen';
import CookingAppDesignScreen from 'screens/portfolio/CookingAppDesignScreen';
import CouncilOnAgingESPScreen from 'screens/portfolio/CouncilOnAgingESPScreen';
import DigitalAnimationScreen from 'screens/portfolio/DigitalAnimationScreen';
import FRCScouterScreen from 'screens/portfolio/FRCScouterScreen';
import KineticVisionScreen from 'screens/portfolio/KineticVisionScreen';
import LaunchpadScreen from 'screens/portfolio/LaunchpadScreen';
import LudumDare46Screen from 'screens/portfolio/LudumDare46Screen';

/**
 * An instance of the `ProjectCollection` class that contains references to every public portfolio project.
 */
const PortfolioEntries = new ProjectCollection([
    {
        data: require('projects/BlueberryFestival/data.json'),
        images: {
            thumbnailImage: require('projects/BlueberryFestival/small-cover.png')
        },
        component: BlueberryFestivalScreen
    },
    {
        data: require('projects/CouncilOnAgingESP/data.json'),
        images: {
            thumbnailImage: require('projects/CouncilOnAgingESP/small-cover.png')
        },
        component: CouncilOnAgingESPScreen
    },
    /*{
        data: require('projects/SpencerWebsite/data.json'),
        images: {
            featuredImage: require('projects/SpencerWebsite/featured-cover.png'),
            thumbnailImage: require('projects/SpencerWebsite/small-cover.png')
        },
        component: SpencerWebsiteScreen
    },
    {
        data: require('projects/USOpen/data.json'),
        images: {
            featuredImage: require('projects/USOpen/featured-cover.png'),
            thumbnailImage: require('projects/USOpen/small-cover.png')
        },
        component: USOpenScreen
    },*/
    {
        data: require('projects/DigitalAnimation/data.json'),
        images: {
            thumbnailImage: require('projects/DigitalAnimation/small-cover.png')
        },
        component: DigitalAnimationScreen
    },
    {
        data: require('projects/LudumDare46/data.json'),
        images: {
            thumbnailImage: require('projects/LudumDare46/small-cover.png')
        },
        component: LudumDare46Screen
    },
    /*{
        data: require('projects/CraigslistRedesign/data.json'),
        images: {
            thumbnailImage: require('projects/CraigslistRedesign/small-cover.jpg')
        },
        component: CraigslistRedesignScreen
    },*/
    {
        data: require('projects/KineticVision/data.json'),
        images: {
            thumbnailImage: require('projects/KineticVision/small-cover.png')
        },
        component: KineticVisionScreen
    },
    {
        data: require('projects/CookingAppDesign/data.json'),
        images: {
            thumbnailImage: require('projects/CookingAppDesign/small-cover.png')
        },
        component: CookingAppDesignScreen
    },
    {
        data: require('projects/FRCScouter/data.json'),
        images: {
            thumbnailImage: require('projects/FRCScouter/small-cover.png')
        },
        component: FRCScouterScreen
    },
    {
        data: require('projects/Launchpad/data.json'),
        images: {
            thumbnailImage: require('projects/Launchpad/small-cover.png')
        },
        component: LaunchpadScreen
    }
]);

export default PortfolioEntries;