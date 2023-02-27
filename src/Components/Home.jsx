import { Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import mypic from "../Assets/mypicture.png";
function Home() {
  const [width, setWidth] = useState(window.innerWidth);

  const DetectWindowSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", DetectWindowSize);

    return () => {
      window.removeEventListener("resize", DetectWindowSize);
    };
  }, [width]);
  return (
    <>
      <section id="home" style={{ backgroundColor: "#2a2f4c", color: "white" }}>
        <div className="name-wrapper nav-link home">
          <Flex
            direction={width < 900 ? "column" : "row"}
            justifyContent="space-between"
            alignItems="center"
          >
            <div style={{ width: "70%" }}>
              <Heading size="lg">
                <Stack direction={["column", "row"]}>
                  <span>My Name is</span>
                  <span id="user-detail-name" style={{ color: "#f6324b" }}>
                    {/* <Typewriter
                                            options={{
                                                autoStart: true,
                                                loop: true,
                                                delay: 50,
                                                strings: ["Gourav Bundiwal"]
                                            }}/> */}
                    Gourav Bundiwal
                  </span>
                </Stack>
              </Heading>
              <br />
              <Heading>
                <Stack direction={["column", "row"]}>
                  <span> I AM </span>
                  <span style={{ color: "#f6324b" }}>
                    <Typewriter
                      options={{
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        strings: ["FULL STACK WEB DEVELOPER", "MERN DEVELOPER"],
                      }}
                    />
                  </span>
                </Stack>
              </Heading>
            </div>
            <div style={{ width: width < 900 ? "80%" : "25%", margin: "20px" }}>
              <Image
                className="home-img"
                borderRadius="10%"
                border="none"
                src={mypic}
              />
            </div>
          </Flex>
          <br />
          {/* <br /> */}
          <div>
            <h3
              align="center"
              style={{ fontSize: "20px", paddingBottom: "20px" }}
            >
              A Passionate Full Stack Web Developer who has Problem-Solving
              mindset and the ability to perform well in a team. Acquired 1500+
              hours of coding and hands-on experience in cloning websites.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
