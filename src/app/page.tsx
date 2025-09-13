import { HomeAbout } from "./s-about";
import { HomeFAQ } from "./s-faq";
import { HomeProjects } from "./s-projects";
import { HomeTechs } from "./s-techs";


export default function Page() {
  return (
    <div>
      <HomeTechs />
      <HomeAbout />
      <HomeProjects />
      <HomeFAQ />
    </div>
  );
}
