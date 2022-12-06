import React from 'react';
import Section from 'components/Section';
import SectionDivider from 'components/SectionDivider';
import PortfolioHeader from 'components/PortfolioHeader';
import ImageDisplay from 'components/ImageDisplay';
import PortfolioEntries from 'config/PortfolioEntries';

import WideImage from 'projects/SpencerWebsite/assets/website-mockup.jpg';
import NarrowImage from 'projects/SpencerWebsite/assets/wellsburg.jpg';
import imports from 'projects/SpencerWebsite/imports';

/**
 * The portfolio page for the Spencer Manufacturing website.
 */
export default function SpencerWebsiteScreen() {
    return (
        <div className="_SpencerWebsiteScreen _Screen">
            <PortfolioHeader 
                entry={PortfolioEntries.getProject("spencer-website")}
                wideImage={WideImage}
                narrowImage={NarrowImage}
            />
            <Section>
                <h2>Introduction</h2>
				<p>
					One of my responsibilities at Spencer Manufacturing was to make improvements to the company WordPress website. The current site was slow, many of its pages had been fleshed out years ago and were out-of-date, and it had no true mobile phone layout. After fixing the most glaring issues, it became clear that a brand new website would be necessary to reach the company&apos;s goals.
				</p>
				<p>
					The firm was seeking a site that would:
				</p>
                <ul>
                    <li>implement responsive web design in order to render properly on phones</li>
                    <li>load pages and content faster</li>
                    <li>refresh the style while maintaining a similar visual identity to the prior site</li>
                    <li>enable the company to repair and maintain the site in my absence, regardless of my chosen development method</li>
                    <li>create a tool, accessible only on a company approval basis, that would permit users to create and customize a fire truck, generate preview drawings of it, and submit it to representatives for review</li>
                </ul>
            </Section>
            <SectionDivider />
            <Section>
                <h2>Process</h2>
				<p>
					I chose to develop the site using pure HTML/CSS/JavaScript. My first mock-up contained only a home page with a large, eye-catching image header, a slideshow of the company&apos;s recent apparatus deliveries, a section of customer testimonials, and a hook for connecting with the business. I prioritized including as much textual content as possible so that the page was viewable even while images were being loaded in.
				</p>
                <ImageDisplay
                    images={[imports['new-home-page']]}
                    caption="Left: the prior site's home page. Right: the new home page."
                    forceFullWidth={true}
                />
                <p>
					As more features were developed and the company made more requests, the layout of the home page evolved and grew quickly. I had to ensure that the layout remained cohesive while showing the most critical elements first.
				</p>
                <ImageDisplay
                    images={[imports['home-page-flow']]}
                    caption="The progression of the home page's development, ultimately leading to the final product."
                    forceFullWidth={true}
                />
                <p>
					The original deliveries page, which shows all of the company&apos;s recent finished trucks, adapted poorly to a narrow page width and made it generally very difficult to search for a particular truck, whether by name or by filterable category. The new design addressed these issues and modernized the design.
				</p>
                <ImageDisplay
                    images={[imports['deliveries-presentation']]}
                    caption="Top: the original deliveries page. Bottom: the new deliveries page on desktop and mobile."
                    forceFullWidth={true}
                />
                <p>
					Each truck on the deliveries page links to a separate page with relevant info and images. The old page was inconsistent with the identity of the rest of the website and made it difficult to view images and parse textual information. I designed the new page to feature an image of the truck and split the truck&apos;s attributes into categories while remodeling the individual image viewer.
				</p>
                <ImageDisplay
                    images={[imports['view-truck-page']]}
                    caption="Top: the original truck viewing page. Bottom: the newly designed truck viewing page."
                    forceFullWidth={true}
                />
                <p>
					The fire truck customization tool eventually became known as the Truck Builder. Originally, it was designed to be used only by salespeople with their clients; however, the company decided to make it public, requiring several new features and changes:
				</p>
                <ul>
                    <li>A method for the company to vet and approve access for specific people</li>
                    <li>A method to permit access for only users with approved tokens</li>
                    <li>A method for people to submit their trucks to the company to be reviewed later</li>
                    <li>A complete UI overhaul to improve usability for the public</li>
                </ul>
                <ImageDisplay
                    images={[imports['truck-builder-progression']]}
                    caption="Left: the original design of the Truck Builder. Right: the refreshed user-oriented Truck Builder."
                    forceFullWidth={true}
                />
                <p>
					Because the new site was programmed from scratch, the staff at the company did not have the technical knowledge to perform low-level maintenance tasks. I created an administrative dashboard to the site, locked by passcode, allowing the staff of the company to:
				</p>
                <ul>
                    <li>add, edit, and delete truck delivery pages</li>
                    <li>approve users to the Truck Builder and view their submissions</li>
                    <li>add and edit job listings on the Careers page, as well as view and print applicant submissions</li>
                    <li>update which company email addresses receive notifications</li>
                    <li>read documentation on how I migrated the site and technical details on common issues and solutions</li>
                </ul>
                <ImageDisplay
                    images={[imports['admin-dashboard']]}
                    caption="Various administrative dashboard menus."
                    forceFullWidth={true}
                />
            </Section>
            <SectionDivider />
            <Section>
                <h2>Results</h2>
                <ImageDisplay
                    images={[imports['complete-site']]}
                    forceFullWidth={true}
                />
            </Section>
        </div>
    )
}