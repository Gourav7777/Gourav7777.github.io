import React from 'react'
import {  Flex} from "@chakra-ui/react";
import '../CSS/Contact.css'
import { IoCallOutline } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";


const Contact = () => {
  
  return (
    <section style={{
      width: "100%",
      backgroundColor:  "#2a2f4c",
      color:"white",
      padding:"20px",
      
    }}>
    <Flex id="contact" direction="column" m={"auto"} border="1px solid white"
    
    boxShadow='dark-lg' p='6' rounded='md' 
    gap={10}
    
     justifyContent='center'
     fontSize={['sm', 'md', '2lg', '2xl']}
     >
      
      
      
      
        
         

          <a id="contact-github" href="https://github.com/Gourav7777" target={"_blank"} rel="noreferrer"><p className='social_text'><VscGithub /> <span> GitHub</span></p></a>

        
       

          <a  id="contact-linkedin" href="https://www.linkedin.com/in/gourav-bundiwal-970ba81b1/" target={"_blank"} rel="noreferrer"><p  className='social_text'><BsLinkedin /> <span> Linkedin</span></p></a>
       


        

          <p  id="contact-phone" className='social_text'><IoCallOutline /> <span> +91 7988759903</span></p>
        

          <p id="contact-email" className='social_text'><MdEmail /> <span> bundiwalgourav@gmail.com</span></p>
        
        </Flex>
      



       

      
      
      </section>
  )
}

export default Contact