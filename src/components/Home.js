
import resumeData from "../data/data";
import About from "./About";
import Skills from "./Skills";
import styled from "styled-components";
import Header from "./Header";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import Projects from "./Projects";

function Home() {
  const AllContainer = styled.div`
    background-color: #f4f4f4;
    min-width: 100%;
    min-height: 100%;
    margin: 0;
  `;

  const Container = styled.div`
    max-width: 75%;
    min-width: 75%;
    margin: 5rem auto 0;
  `;

  const { dark } = useSelector((state) => state.site);

  return (
    <AllContainer className={dark ? "dark" : ""}>
      <Header props={resumeData["tr"]} />
      <Container>
        <About props={resumeData["tr"]} />
      </Container>
      <Skills props={resumeData["tr"]} />
      <Profile props={resumeData["tr"]} />
      <Projects props={resumeData["tr"]} />
    </AllContainer>
  );
}

export default Home;
