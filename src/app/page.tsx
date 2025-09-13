import { HomeAbout } from "./s-about";
import { HomeFAQ } from "./s-faq";
import { HomeHero } from "./s-home";
import { HomeProjects } from "./s-projects";
import { HomeTechs } from "./s-techs";
import { HomeTestimonials } from "./s-testimonials";


export default function Page() {
  return (
    <>
      <HomeHero />
      <HomeTechs />
      <HomeAbout />
      <HomeProjects />
      <HomeTestimonials />
      <HomeFAQ />
    </>
  );
}
