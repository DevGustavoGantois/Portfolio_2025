import { HomeAbout } from "./s-about";
import { HomeFAQ } from "./s-faq";
import { HomeProjects } from "./s-projects";
import { HomeTechs } from "./s-techs";
import { HomeTestimonials } from "./s-testimonials";


export default function Page() {
  return (
    <div>
      <HomeTechs />
      <HomeAbout />
      <HomeProjects />
      <HomeTestimonials />
      <HomeFAQ />
    </div>
  );
}
