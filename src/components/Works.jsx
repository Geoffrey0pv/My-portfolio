import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";

const ProjectCard = ({ index, project }) => {
  const { name, description, tags, image, source_code_link } = project;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt='project_image'
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white text-[24px] font-bold">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p key={index} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          working...
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My projects.
        </h2>
      </motion.div>

      <div className="w-full flex flex-wrap justify-center ">
        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          I have worked on many projects, some of them are listed below.
          If you want to see more of my projects, you can visit my github profile.
        </motion.p>
      </div>

      <div className="w-full flex flex-wrap justify-center items-center mt-16 gap-32">
        {projects.map((project, index) => (
          <div className="xs:w-[250px] w-full" key={`project-${index}`}>
            <ProjectCard key={`project-${index}`} 
              index={index} 
              project={project}/> 
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
