import ProjectCollection from 'classes/ProjectCollection';
import BlueberryFestivalScreen from 'screens/portfolio/BlueberryFestivalScreen';
import DigitalAnimationScreen from 'screens/portfolio/DigitalAnimationScreen';
import LudumDare46Screen from 'screens/portfolio/LudumDare46Screen';
import SpencerWebsiteScreen from 'screens/portfolio/SpencerWebsiteScreen';

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
    }
]);

export default PortfolioEntries;