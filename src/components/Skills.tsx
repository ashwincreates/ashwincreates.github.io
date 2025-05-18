import {
  faAngular,
  faFlutter,
  faJava,
  faJs,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills() {
  return (
    <section id="skills" className="min-h-[100vh] px-6 md:px-24 space-y-20">
      <h3 className="text-stone-300 font-display text-4xl py-24">Stuff I work with</h3>
      <div className="flex gap-16 flex-wrap">
        {[faReact, faJava, faNodeJs, faJs, faPython, faAngular, faFlutter].map(
          (icon) => (
            <div key={icon.iconName} className="rounded-md p-4 border aspect-square w-24 flex items-center justify-center shadow-lg">
              <FontAwesomeIcon
                key={icon.iconName}
                className="text-stone-100/30"
                size={"4x"}
                icon={icon}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Skills;
