import ProjectCollection from 'classes/ProjectCollection';
import BlueberryFestivalScreen from 'screens/BlueberryFestivalScreen';
import SpencerWebsiteScreen from 'screens/SpencerWebsiteScreen';

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
    }
]);

export default PortfolioEntries;