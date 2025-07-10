/**
 * @class
 * @classdesc Stores important overview data about the project associated with it.
 */
export default class PortfolioEntry {
	/**
	 * The string to append upon the URL for this project.
	 * @type {string}
	 */
	urlName;
	/**
	 * The front-facing title of this project.
	 * @type {string}
	 */
	title;
	/**
	 * A date used to sort entries with each other (YYYY-MM-DD).
	 * @type {string}
	 */
	date;
	/**
	 * A brief sentence description of this project.
	 * @type {string}
	 */
	tagline;
	/**
	 * Whether or not this entry should be featured on the home page.
	 * @type {boolean}
	 */
	featured;
	/**
	 * Array of strings that broadly describe the disciplines applied in the project.
	 * @type {string[]}
	 */
	disciplines;
	/**
	 * Granular metadata to be displayed at the top-level of the project.
	 * @type {Specifications}
	 */
	specs;
	
	/**
	 * Wide banner that serves as the header of a portfolio page as well as the thumbnail for the entry if it is featured.
	 * @type {string}
	 */
	featuredImage;
	/**
	 * Smaller, narrow image that serves as the thumbnail for the entry on the portfolio page.
	 * @type {string}
	 */
	thumbnailImage;
	/**
	 * The screen component correlating to this entry.
	 * @type {React.JSX.Element}
	 */
    screenComponent;

    constructor(data, images, component) {
        this.urlName = data.urlName;
        this.title = data.title;
        this.date = data.date;
        this.sortingOrder = data.sortingOrder || data.date;
        this.tagline = data.tagline;
        this.featured = data.featured;
        this.disciplines = data.disciplines;
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

/**
 * @typedef {Object} Specifications
 * @property {string} dates Human-readable date range that the project was created during.
 * @property {Record<string, string>} toolsUsed Categorized list of tools used to produce the project.
 * @property {Record<string, string>} links Names and hyperlinks that are pertinent to the project.
 * @property {string} overview A paragraph overview of the project.
 * @property {string} collaborators Anybody who collaborated on the project who should be acknowledged.
 */