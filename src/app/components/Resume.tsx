const Resume = () => {
  return (
    <div className="mt-12 ml-12 mb-10 mr-12 max-w-[750px]">
      <div className="flex justify-between">
        <div className="text-xl">Thomas Toan</div>
        <div className="text-xs">Toaney@gmail.com • (415) 994-1694</div>
      </div>
      <div className="text-xs mt-1">EXPERIENCE</div>
        <div>
          <div className="flex justify-between">
            <div><span className="font-bold text-md">ICON PLC</span>, Remote</div>
            <div className="text-xs">July 2021 - October 2023</div>
          </div>
          <div className="font-bold text-sm">Software Engineer</div>
          <ul className="ml-5 text-sm">
            <li>• Served as Front End Lead for creating a new Study Portal application (w/ React Hooks) equipping hospitals
with a dashboard to easily register patients onto available ICON clinical trials.</li>
            <li>• Spearheaded effort to refactor user authentication and session management with the implementation of JWTs,
cookies and session storage. These changes allowed secure authentication across different web domains.</li>
            <li>• Collaborated with Back End engineers for application architecture, API design, and division of responsibilities.</li>
            <li>• Determined timelines with PMs for new features and demoed new UIs for third party stakeholders.</li>
            <li>• Designed, built, and tested new internal tools for record processing and the automation of new study setup.</li>
            <li>• Technologies: React, React Hooks, Postman, GitLab, Jira, Confluence, Springboot, Java, Figma</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between">
            <div><span className="font-bold text-md">ESPARK LEARNING</span>, San Francisco, CA</div>
            <div className="text-xs">March 2020 - February 2021</div>
          </div>
          <div className="font-bold text-sm">Software Engineer</div>
          <ul className="ml-5 text-sm">
            <li>• Increased new teacher conversions through A/B tested UIs and Google/Clever OAuth integrations.</li>
            <li>• Collaborated with the Marketing team to create new Rails tables for coordinating site messaging and
automated lifecycle emails. With the new system, manual email template updates were no longer necessary.</li>
            <li>• Developed new interactive progress report charts (with React Hooks and Redux) for teacher dashboards.</li>
            <li>• Technologies: React Hooks, Elm, Ruby on Rails, Bootstrap, Elm Test, Github, GitLab, Asana, Figma</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between">
            <div><span className="font-bold text-md">ASURION</span>, San Mateo, CA</div>
            <div className="text-xs">July 2018 - September 2019</div>
          </div>
          <div className="font-bold text-sm">Software Engineer</div>
          <ul className="ml-5 text-sm">
            <li>• Built and A/B tested a white label application for AT&T, Verizon, and Sprint’s in-store appointment system.</li>
            <li>• Served as Project Lead and built the page template for all of Asurion office location pages.</li>
            <li>• Conducted code workshops for partner organizations such as Girls in STEM and KIPP schools.</li>
            <li>• Technologies: React Hooks, React-Router, Redux, SCSS, Jest, Enzyme, Bitbucket, Jira, Invision, WordPress</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between">
            <div><span className="font-bold text-md">JELLY BELLY CANDY COMPANY</span>, Fairfield, CA</div>
            <div className="text-xs">March 2017 - June 2018</div>
          </div>
          <div className="font-bold text-sm">Front End Developer</div>
          <ul className="ml-5 text-sm">
            <li>• Rebuilt jellybelly.com into an ADA compliant website resulting in an overall WCAG 2.0 AA compliance rating.</li>
            <li>• Enhanced product pages and order checkout flows resulting in increased order conversion rates.</li>
            <li>• Technologies: JavaScript, HYPR, Kibo CMS, Bootstrap, Git, TortoiseSVN, Basecamp, BrightEdge, VidiEmi</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between">
            <div><span className="font-bold text-md">FREELANCER</span>, Remote</div>
            <div className="text-xs">May 2015 - February 2017</div>
          </div>
          <div className="font-bold text-sm">Front End Developer / Graphic Designer</div>
          <ul className="ml-5 text-sm">
            <li>• Designed and developed content and business assets for clients obtained through 99 Designs.</li>
            <li>• Technologies: JavaScript, HTML, Sass, LESS, Sketch, AWS, WordPress, Photoshop, Illustrator</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between">
            <div><span className="font-bold text-md">WELLS FARGO & COMPANY</span>, San Francisco, CA</div>
            <div className="text-xs">October 2013 - April 2015</div>
          </div>
          <div className="font-bold text-sm">QAE Regression Analyst <span>contract through S3</span></div>
          <ul className="ml-5 text-sm">
            <li>• Supported new services by identifying regressions and defects for a test bed consisting of 40,000+ test cases.</li>
            <li>•  Technologies: Green Hat Tester, IBM Rational ClearQuest, SharePoint Virtual Machine, XML</li>
          </ul>
        </div>
        <div>
          <div className="flex justify-between">
            <div><span className="font-bold text-md">UBS FINANCIAL SERVICES</span>, Palo Alto, CA</div>
            <div className="text-xs">July 2012 - May 2013</div>
          </div>
          <div className="font-bold text-sm">Client Service Associate</div>
          <ul className="ml-5 text-sm">
            <li>• Provided wealth management and estate planning services to executives and high net worth families.</li>
          </ul>
        </div>
      <div className="text-xs mt-1">PHILANTHROPY</div>
        <div>
          <div className="flex justify-between">
            <div><span className="font-bold text-md">Push America - Journey of Hope Cyclist</span>, Long Beach, CA - Washington D.C.</div>
            <div className="text-xs">June 2013 - August 2013</div>
          </div>
          <ul className="ml-5 text-sm">
            <li>• Cycled from Long Beach, CA to Washington D.C. and volunteered at orgs serving the disabled community</li>
            <li>•  Raised $9,000 as part of the team’s achievement of raising over $500,000 on behalf of people with disabilities.</li>
          </ul>
        </div>
      <div className="text-xs mt-1">EDUCATION</div>
        <div>
          <div className="flex justify-between">
            <div><span className="font-bold text-md">UNIVERSITY OF CALIFORNIA, BERKLEY</span>- BA Political Economics</div>
            <div className="text-xs">Class of 2012</div>
          </div>
        </div>
    </div>
  )
}

export default Resume