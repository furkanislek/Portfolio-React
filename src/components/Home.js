import resumeData from "../data/data";
import About from "./About";
import Skills from "./Skills";
import styled from "styled-components";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./Profile";
import Projects from "./Projects";
import Footer from "./Footer";

function Home() {
  const site = useSelector((state) => state.site);
  const dispatch = useDispatch();
  const dilSecenegi = resumeData[site.language];
  console.log("dilSecenegi", dilSecenegi);

  const AllContainer = styled.div`
    background-color: #f4f4f4;
    min-width: 100%;
    min-height: 100%;
    margin: 0;
  `;

  const { dark } = useSelector((state) => state.site);

  return (
    <AllContainer className={dark ? "dark" : ""}>
      <Header props={dilSecenegi} />

      <About props={dilSecenegi} />

      <Skills props={dilSecenegi} />
      <Profile props={dilSecenegi} />
      <Projects props={dilSecenegi} />
      <Footer props={dilSecenegi} />
    </AllContainer>
  );
}

export default Home;
