import { HomeAbout } from "./s-about";
import { HomeFAQ } from "./s-faq";
import { HomeTechs } from "./s-techs";


export default function Page() {
  return (
    <div>
      <HomeTechs />
      <HomeAbout />
      <HomeFAQ />
    </div>
  );
}
