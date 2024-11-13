import {
  faAngular,
  faFlutter,
  faJs,
  faNode,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills() {
  return (
    <section className="min-h-[500px] px-6 md:px-24 space-y-20">
      <h3 className="text-stone-300 font-display text-xl">Stuff I work with</h3>
      <div className="flex gap-16 flex-wrap">
        {[faReact, faNodeJs, faJs, faPython, faAngular, faFlutter].map(
          (icon) => (
            <FontAwesomeIcon
              key={icon.iconName}
              className="text-stone-100/30"
              size={"4x"}
              icon={icon}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Skills;
