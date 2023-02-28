import React from 'react'
import '../CSS/Skills.css'
import {FaHtml5} from "react-icons/fa";
import {FaCss3Alt} from "react-icons/fa";
import {SiJavascript} from "react-icons/si";
import {SiTypescript} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import {SiRedux} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import {SiChakraui} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import {SiMongodb} from "react-icons/si";
import {SiExpress} from "react-icons/si";

import AOS from 'aos';
import { Box,  Text , SimpleGrid, Flex,Show} from "@chakra-ui/react";
import 'aos/dist/aos.css';
import { useEffect,useState } from 'react';
const Skills = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    AOS.init();
  }, [])

  const DetectWindowSize = () => {
    setWidth(window.innerWidth)
}

useEffect(() => {
    window.addEventListener("resize", DetectWindowSize)

    return () => {
        window.removeEventListener("resize", DetectWindowSize)
    }
}, [width])
  return (
    <section style={{
      width: "100%",
      backgroundColor:  "#2a2f4c",
      color:"white",
      padding:"20px",
     
    }}>
    <div id="skills" >

      
    {
                    width > 700 && width< 1000 ?
                        <>
      
       <SimpleGrid 
      //  columns={[1, 3]}
       columns="2"
        ml={"6%"}
         gap={10}
      alignItems="center" id={"skills_container"} data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-sine" >

        <Flex className='skills-card' direction="column">   <FaHtml5 className="skills-card-img" /> <p className="skills-card-name">HTML5</p> </Flex>

        <Flex className='skills-card' direction="column"> <FaCss3Alt className="skills-card-img" /> <p className="skills-card-name">CSS3</p> </Flex>

        < Flex className='skills-card' direction="column"> <SiJavascript className="skills-card-img" /><p className="skills-card-name">JavaScript</p> </Flex>

        <Flex className='skills-card' direction="column"> <SiTypescript className="skills-card-img" /><p className="skills-card-name">TypeScript</p> </Flex>

        < Flex className='skills-card' direction="column"> <FaReact className="skills-card-img" /><p className="skills-card-name">React</p> </Flex>

        <Flex className='skills-card' direction="column"> <SiRedux className="skills-card-img" /><p className="skills-card-name">Redux</p> </Flex>

        <Flex className='skills-card' direction="column"> <TbBrandNextjs className="skills-card-img" /><p className="skills-card-name">Next.JS</p> </Flex>

        <Flex className='skills-card' direction="column"> <SiChakraui className="skills-card-img" /><p className="skills-card-name">Chakra UI</p> </Flex>

        <Flex className='skills-card'direction="column"> <FaNodeJs className="skills-card-img" /><p className="skills-card-name">Node JS</p> </Flex>

        <Flex className='skills-card'direction="column"> <SiMongodb className="skills-card-img" /><p className="skills-card-name">Mongo Db</p> </Flex>

        <Flex className='skills-card'direction="column"> <SiExpress className="skills-card-img" /><p className="skills-card-name">Express JS</p> </Flex>

       
      </SimpleGrid>


      </>
                        :
                        <>
                         <SimpleGrid 
       columns={[1, 4]}
      //  columns="2"
        ml={"6%"}
         gap={10}
      alignItems="center" id={"skills_container"} data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-sine" >

        <Flex className='skills-card' direction="column">   <FaHtml5 className="skills-card-img" /> <p className="skills-card-name">HTML5</p> </Flex>

        <Flex className='skills-card' direction="column"> <FaCss3Alt className="skills-card-img" /> <p className="skills-card-name">CSS3</p> </Flex>

        < Flex className='skills-card' direction="column"> <SiJavascript className="skills-card-img" /><p className="skills-card-name">JavaScript</p> </Flex>

        <Flex className='skills-card' direction="column"> <SiTypescript className="skills-card-img" /><p className="skills-card-name">TypeScript</p> </Flex>

        < Flex className='skills-card' direction="column"> <FaReact className="skills-card-img" /><p className="skills-card-name">React</p> </Flex>

        <Flex className='skills-card' direction="column"> <SiRedux className="skills-card-img" /><p className="skills-card-name">Redux</p> </Flex>

        <Flex className='skills-card' direction="column"> <TbBrandNextjs className="skills-card-img" /><p className="skills-card-name">Next.JS</p> </Flex>

        <Flex className='skills-card' direction="column"> <SiChakraui className="skills-card-img" /><p className="skills-card-name">Chakra UI</p> </Flex>

        <Flex className='skills-card'direction="column"> <FaNodeJs className="skills-card-img" /><p className="skills-card-name">Node JS</p> </Flex>

        <Flex className='skills-card'direction="column"> <SiMongodb className="skills-card-img" /><p className="skills-card-name">Mongo Db</p> </Flex>

        <Flex className='skills-card'direction="column"> <SiExpress className="skills-card-img" /><p className="skills-card-name">Express JS</p> </Flex>

       
      </SimpleGrid>
                        
                        
                        
                        </>}


    </div>
    </section>
    
  )
}

export default Skills