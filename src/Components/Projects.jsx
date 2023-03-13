

import { Flex, Heading, HStack, Image } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons"
import Diesel from "../Assets/Diesel.png";
import Snapdeal from "../Assets/Snapdeal.png";
import {FaReact} from "react-icons/fa";
import "../CSS/Projects.css"
import { VscGithub } from "react-icons/vsc";
import {SiChakraui} from "react-icons/si";
import {SiRedux} from "react-icons/si";
function Projects() {
    return (
      <section style={{
        width: "100%",
        backgroundColor:  "#2a2f4c",
        color:"white",
        
        padding: "20px",
        
      }}>
        <section id="projects">
            <div>
                
                <div className="project-wrapper">
                    <Flex className="project-card" direction={['column', 'row']} alignItems='center'>
                        <div className="project-image">
                            <Image src={Diesel} />
                        </div>
                        <div>
                            <Heading className="project-title" m='20px 10px'>Diesel Clone</Heading>
                            <p className="project-description">
                              
                                Diesel is an Italian clothing company specialising in high-quality jeans and other apparel and accessories for women, men and children of all ages. The brand is known for its denim-heavy designs as well as its strong, ironic and playful advertising campaigns.
                            </p>
                            <HStack className="project-tech-stack" mt='20px'>
                                <Image src='https://i.postimg.cc/FznFsvNk/icons8-html-48.png' />
                                <Image src='https://i.postimg.cc/vHRSkjW0/icons8-css-48.png' />
                                <Image src='https://i.postimg.cc/CMCjM63P/icons8-js-48.png' />
                                <FaReact fontSize='30px'  />
                               
                                <SiChakraui fontSize='30px' />
                            </HStack>
                            <HStack mt='20px'>
                                <Flex className="live project-github-link" alignItems='center' onClick={() => window.open("https://github.com/Gourav7777/plastic-bee-2809")}>
                                   
                                    <VscGithub fontSize='21px' /> <span></span> Github
                                </Flex>
                                <span>|</span>
                                <div className="live project-deployed-link" onClick={() => window.open("my-app-one-blond.vercel.app/")}>
                                    <ExternalLinkIcon /> Live
                                </div>
                            </HStack>
                        </div>
                    </Flex>

                    <Flex className="project-card" direction={['column', 'row']} alignItems='center'>
                        <div>
                            <Heading className="project-title" m='20px 10px'>Snapdeal Clone</Heading>
                            <p className="project-description">
                            Snapdeal is India's leading pure-play value Ecommerce platform. Snapdeal is one of the top four online lifestyle shopping destinations of India. Snapdeal brings together a wide assortment of good quality and value- priced merchandise on its platform.
                            </p>
                            <HStack className="project-tech-stack" mt='20px'>
                            <Image src='https://i.postimg.cc/FznFsvNk/icons8-html-48.png' />
                                <Image src='https://i.postimg.cc/vHRSkjW0/icons8-css-48.png' />
                                <Image src='https://i.postimg.cc/CMCjM63P/icons8-js-48.png' />
                                <FaReact fontSize='30px'  />
                               
                                <SiChakraui fontSize='30px' />
                                <SiRedux fontSize='30px' />
                            </HStack>
                            <HStack mt='20px'>
                                <Flex className="live project-github-link" alignItems='center' onClick={() => window.open("https://github.com/Mehul-Kanjariya/subsequent-parcel-2806")}>
                                <VscGithub fontSize='21px' /> <span></span> Github
                                </Flex>
                                <span>|</span>
                                <div className="live project-deployed-link" onClick={() => window.open("https://subsequent-parcel-2806-mehulktik-gmailcom.vercel.app/")}>
                                    <ExternalLinkIcon /> Live
                                </div>
                            </HStack>
                        </div>
                        <div className="project-image">
                            <Image src={Snapdeal} />
                        </div>
                    </Flex>

                  
                    <Flex className="project-card" direction={['column', 'row']} alignItems='center'>
                        <div className="project-image">
                            <Image src= "https://user-images.githubusercontent.com/112304655/216995304-1e240e7b-00c6-4444-9d89-04ec742b02e3.jpg" />
                        </div>
                        <div>
                            <Heading className="project-title" m='20px 10px'>Mytheresa Clone</Heading>
                            <p className="project-description">
                                
                            Mytheresa is the finest edit in luxury fashion for women, men and kids. They have over 200 of the best international designers, 600 new arrivals each week, fast and reliable delivery, excellent customer service, utmost security and data protection, and free returns and exchanges within 30 days.
                            </p>
                            <HStack className="project-tech-stack" mt='20px'>
                            <Image src='https://i.postimg.cc/FznFsvNk/icons8-html-48.png' />
                                <Image src='https://i.postimg.cc/vHRSkjW0/icons8-css-48.png' />
                                <Image src='https://i.postimg.cc/CMCjM63P/icons8-js-48.png' />
                            </HStack>
                            <HStack mt='20px'>
                                <Flex className="live project-github-link" alignItems='center' onClick={() => window.open("https://github.com/sayshark75/My_Fashion_Cart")}>
                                <VscGithub fontSize='21px' /> <span></span> Github
                                </Flex>
                                <span>|</span>
                                <div className="live project-deployed-link" onClick={() => window.open("https://my-fashion-cart.netlify.app/")}>
                                    <ExternalLinkIcon /> Live
                                </div>
                            </HStack>
                        </div>
                    </Flex>



                    <Flex className="project-card" direction={['column', 'row']} alignItems='center'>
                        <div>
                            <Heading className="project-title" m='20px 10px'>Snapdeal Clone</Heading>
                            <p className="project-description">
                            Snapdeal is India's leading pure-play value Ecommerce platform. Snapdeal is one of the top four online lifestyle shopping destinations of India. Snapdeal brings together a wide assortment of good quality and value- priced merchandise on its platform.
                            </p>
                            <HStack className="project-tech-stack" mt='20px'>
                            <Image src='https://i.postimg.cc/FznFsvNk/icons8-html-48.png' />
                                <Image src='https://i.postimg.cc/vHRSkjW0/icons8-css-48.png' />
                                <Image src='https://i.postimg.cc/CMCjM63P/icons8-js-48.png' />
                                <FaReact fontSize='30px'  />
                               
                                <SiChakraui fontSize='30px' />
                                <SiRedux fontSize='30px' />
                            </HStack>
                            <HStack mt='20px'>
                                <Flex className="live project-github-link" alignItems='center' onClick={() => window.open("https://github.com/Mehul-Kanjariya/subsequent-parcel-2806")}>
                                <VscGithub fontSize='21px' /> <span></span> Github
                                </Flex>
                                <span>|</span>
                                <div className="live project-deployed-link" onClick={() => window.open("https://subsequent-parcel-2806-mehulktik-gmailcom.vercel.app/")}>
                                    <ExternalLinkIcon /> Live
                                </div>
                            </HStack>
                        </div>
                        <div className="project-image">
                            <Image src={Snapdeal} />
                        </div>
                    </Flex>

                   

                </div>
            </div>
        </section>
        </section>
    )
}

export default Projects;
