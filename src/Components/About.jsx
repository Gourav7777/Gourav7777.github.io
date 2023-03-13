

import { Box, Card, Heading, Stack, Button, Flex } from "@chakra-ui/react";
import Resume from '../PDF/Gourav_Bundiwal_Resume.pdf'
import { DownloadIcon } from '@chakra-ui/icons'
import "../CSS/About.css";

function AboutMe() {
    return (
        <section style={{
            // width: "100%",
            backgroundColor:  "#2a2f4c",
            color:"white"
          }}>
            <div id="about" className="about section">
                <Heading textAlign={'left'} textDecoration="underline" textDecorationColor="#f6324b">About Me</Heading>
                {/* <div style={{ borderBottom: "5px solid red", width: "15%" }}></div> */}
                <Flex direction={['column', "row"]} justifyContent='space-between' alignItems='center'>
                    <>
                        <Heading size='lg' m='30px'>I am Gourav Bundiwal <br />
                            <span style={{ color: "#f6324b" }}>FULL STACK WEB DEVELOPER</span>
                        </Heading>
                    </>
                    <a className="nav-link resume" href={Resume} id="resume-button-2" onClick={() => window.open("https://drive.google.com/file/d/1SwaqlQIIfabg-mgmSySgWnfEmDxgkRz5/view?usp=sharing")} download="Gourav_Bundiwal_Resume">
                        <Button className="margin-class" colorScheme='red'>
                            <DownloadIcon /> Resume
                        </Button>
                    </a>
                </Flex>
                <p id="user-detail-intro" style={{ width: "90%", fontSize: "20px", margin: "20px", textAlign: 'justify' }}>
                A Full-Stack Web Developer specializing in MERN Stack with good
        proficiency in ReactJS, JavaScript, Redux, NodeJS, ExpressJS, Data
        Structures and Algorithms. Has a Problem-Solving mindset and the ability
        to perform well in a team. Acquired 1200+ hours of coding and hands-on
        experience in cloning websites. Looking forward to working as an
        accountable and competent professional in an exciting tech organization.
                </p>
               
                
            </div>
        </section>
    )
}

export default AboutMe;