import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({ title, description, index }) => {
  return (

    <Tilt className="xs:w-[250px] w-full">{

      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >

        <div options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={services[index].icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          <p className="text-center">{description}</p>
        </div>
      </motion.div>
    }</Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <div className="w-full flex justify-between items-start mt-4 text-secondary text-[15px] leading-[30px] max-w-3xl mx-auto">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="w-1/2 pr-4"
        >
          I'm Software Engineering and Industrial Engineering student.
          <br className='sm:block hidden' />
          <strong>My technical programming skills</strong> span multiple languages, including Java, C++, Python, Scala & javascript.
          <br className='sm:block hidden' />
          <strong>My soft Skills</strong> include communication, creative thinking, a growth mindset, active listening, teamwork, problem-solving, adaptability, and time management.
          <br className='sm:block hidden' />
          I have experience in:
          <br className='sm:block hidden' />
          <ul className="list-disc list-inside">
            <li><strong>Web development</strong> using Node.js, tailWindCSS, React, Redux, PostgreSQL, Django, GraphQL, Postman and AzureDevops.</li>
          </ul>
        </motion.p>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="w-1/2 pl-4"
        >
          <ul className="list-disc list-inside">
            <li><strong>Software development</strong> process making eliciting, recording & analyzing requirements using different agile & classic methods throughout SDLC. I'm using tools as use cases, user stories, requirements documents, prototypes, context diagrams, UML diagrams & flow charts.</li>
            <li><strong>Data processing and analysis</strong> using Python, Pandas, Numpy, Matplotlib, Seaborn, Scikit-learn, Excel, SQL & Jupyter Notebook.</li>
          </ul>
          <span className="underline">
            I am passionate about technology and enjoy working on projects that involve strengthening & learning new things
          </span>
          &nbsp; :)
        </motion.p>
      </div>

      <motion.div variants={textVariant()} className="text-center mt-20">
        <h3 className={styles.sectionSubText}>I'm working on to become a great one... </h3>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard  key={service.title} index = { index } {...service} />
        ))}
      </div>
    </>
  );
}


export default SectionWrapper(About, "about")