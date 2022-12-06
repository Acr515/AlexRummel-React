import PortfolioEntry from './PortfolioEntry';

/**
 * Singleton class that contains data for every public portfolio project. Instantiated in the PortfolioEntries.js file.
 */
export default class ProjectCollection {

    projects = [];

    /**
     * Instantiates the ProjectCollection. Creates an array of `PortfolioEntry` objects, storing it as `projects`.
     * @param {object[]} projects An array of objects with `data` and `images` properties
     */
    constructor(projects) {
        this.projects = projects.map(entry => {
            return new PortfolioEntry(entry.data, entry.images);
        });
    }

    /**
     * Retrieves only projects that are featured.
     * @returns An array of `PortfolioEntry` instances
     */
    getFeaturedProjects() {
        let featuredProjects = [];
        this.projects.forEach(entry => {
            if (entry.featured) featuredProjects.push(entry);
        });
        return this.sortProjects(featuredProjects);
    }

    /**
     * Retrieves a project using its `urlName` property.
     * @param {string} urlName The urlName property found in the project's data.json file
     * @returns A `PortfolioEntry` instance if found, null if there are no matches
     */
    getProject(urlName) {
        let match = null;
        this.projects.every(entry => {
            if (entry.urlName !== urlName) return true; else {
                match = entry;
                return false;
            }
        });
        return match;
    }
    
    /**
     * Sorts any array of portfolio entries by date.
     * @param {PortfolioEntry[]} projects Defaults to all projects. The array of projects to sort
     * @returns A sorted array of portfolio entries
     */
    sortProjects(projects = this.projects) {
        return projects.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
}