/**
 * Each portfolio project has an instance of this class, which stores important overview data about the project.
 */
export default class PortfolioEntry {

    // Parsed from data.json
    urlName;    // the string to append upon the URL for this project
    title;      // the front-facing title of this project
    date;       // a date used to sort entries with each other (YYYY-MM-DD)
    tagline;    // a brief sentence description of this project
    featured;   // boolean value of whether or not this entry should be featured on the home page
    tags;       // an array of strings that broadly describe the nature of the project (i.e. paid, software, design, etc.)
    specs;      // object of data that displays as a table near the top of a portfolio page

    // Calculated
    featuredImage;      // wide banner that serves as the header of a portfolio page as well as the thumbnail for the entry if it is featured
    thumbnailImage;     // smaller, narrow image that serves as the thumbnail for the entry on the portfolio page
    screenComponent;    // the screen component correlating to this entry

    constructor(data, images, component) {
        this.urlName = data.urlName;
        this.title = data.title;
        this.date = data.date;
        this.sortingOrder = data.sortingOrder || data.date;
        this.tagline = data.tagline;
        this.featured = data.featured;
        this.tags = data.tags;
        this.specs = data.specs;
        
        this.featuredImage = images.featuredImage;
        this.thumbnailImage = images.thumbnailImage;

        this.screenComponent = component;
    }

    /**
     * Gets the absolute URL for this portfolio entry.
     * @returns A string URL
     */
    getUrl() {
        return `/portfolio/${this.urlName}`;
    }

    /**
     * Gets the relative URL for this portfolio entry. Used mainly by index.js to establish route names.
     * @returns A string URL
     */
    getRelativeUrl() {
        return `portfolio/${this.urlName}`;
    }

    /**
     * Gets the year the project was made.
     * @returns The year of the project
     */
    getYear() {
        return new Date(this.date).getFullYear();
    }
}