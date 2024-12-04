import { FunctionComponent } from "react";
import Tag from "../../shared/Tag";

interface AboutUsProps {}

const AboutUs: FunctionComponent<AboutUsProps> = () => {
  return (
    <section>
      <div className="">
        <Tag>About us</Tag>
        <h2>Faster, friendlier feedback loops make life easier.</h2>
        <p>
          Add a Viewer to your team so they can see everything you share, or
          invite people to individual documents. It’s up to you. Stakeholders
          can check out designs in their web browser, test prototypes and leave
          feedback for free.
        </p>
      </div>
      <div className=""></div>
      <ul>
        <li>Shared Cloud Libraries, for a single source of truth</li>
        <li>Prototype previews for user testing and research</li>
        <li>Easy organization with projects</li>
        <li></li>
      </ul>
    </section>
  );
};

export default AboutUs;
