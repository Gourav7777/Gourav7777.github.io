import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import "../CSS/About.css";
const AboutMe = () => {
  return (
    <section style={{
      width: "100%",
      backgroundColor:  "#2a2f4c",
      color:"white"
    }}>
    
    
   
    <Flex
      direction={["column", "row"]}
      justifyContent="space-between"
      alignItems="center"
      id={"about"}
      className="about section"
       gap={5}
    >
      <Image
        sizes={"60%"}
        alt={"Login Image"}
        objectFit={"cover"}
        src={"https://media4.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"}
        ml={0}
      />
      <Text
        id="user-detail-intro"
        style={{
          width: "60%",
          fontSize: "20px",
          margin: "20px",
          textAlign: "justify",
        }}
      >
        A Full-Stack Web Developer specializing in MERN Stack with good
        proficiency in ReactJS, JavaScript, Redux, NodeJS, ExpressJS, Data
        Structures and Algorithms. Has a Problem-Solving mindset and the ability
        to perform well in a team. Acquired 1200+ hours of coding and hands-on
        experience in cloning websites. Looking forward to working as an
        accountable and competent professional in an exciting tech organization.
      </Text>
    </Flex>
    </section>
  );
};

export default AboutMe;
