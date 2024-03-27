import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
  <Tilt className="xs:w-[250px] w-full">
  <motion.div 
  variants={fadeIn("right", "spring", 0.5 *
  index, 0.75)}
  className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
  <div
  options={{
    max: 45,
    scale: 1,
    speed: 450
  }}
  className='bg-tertiary rounded-[20px]
  py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
  <img src={icon} alt={title}
    className='w-16 h-16 object-contain'
  />
  <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

  </div>

  </motion.div>
  </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>
      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      >Welcome to my portfolio! I'm Asmita Lodhavat, a skilled software developer with a strong foundation in Java and JavaScript. My expertise extends to frameworks such as Spring Boot for robust backend development, React.js for dynamic web interfaces, and Node.js for scalable server-side applications. With proficiency in MySQL, I excel in designing and optimizing database solutions to support complex projects.

In addition to my web development skills, I also specialize in mobile development, crafting seamless experiences for both Android and iOS platforms.
What sets me apart is not just my technical proficiency, but also my commitment to collaboration and growth. As a team player, I thrive in environments where diverse perspectives come together to solve complex problems. Additionally, my self-motivation drives me to continuously seek out opportunities for improvement and innovation.
        
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index = {index} {...service} />
      ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")