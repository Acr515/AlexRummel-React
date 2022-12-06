import ProjectCollection from 'classes/ProjectCollection';

/**
 * An instance of the `ProjectCollection` class that contains reference for every public portfolio project.
 */
const PortfolioEntries = new ProjectCollection([
    {
        data: require('projects/BlueberryFestival/data.json'),
        images: {
            featuredImage: require('projects/BlueberryFestival/featured-cover.png'),
            thumbnailImage: require('projects/BlueberryFestival/small-cover.png')
        }
    },
    {
        data: require('projects/SpencerWebsite/data.json'),
        images: {
            featuredImage: require('projects/SpencerWebsite/featured-cover.png'),
            thumbnailImage: require('projects/SpencerWebsite/small-cover.png')
        }
    }
]);

export default PortfolioEntries;