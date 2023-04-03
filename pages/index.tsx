import Head from "next/head";
import styled from "styled-components";
import { About, Banner, Contact, Education, Experience, Languages } from "@/components";
import { Wrapper } from "@/css";

const Home = () => {
  return (
    <Container>
      <Head>
        <title>CV | Alvaro Aguirre</title>
      </Head>
      <Banner />
      <Main>
        <Wrapper>
          <Grid>
            <About />
            <Contact />
            <Experience />
            <Education />
            <Languages />
          </Grid>
        </Wrapper>
      </Main>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Main = styled.main`
  flex: 1;
  //background-color: ${({ theme }) => theme.assets.bgPrimary};
  background-color: ${({ theme }) => theme.colors.grey[3]}; // TO DO: delete
`;

const Grid = styled.div`
  margin: ${({ theme }) => theme.spacing[4]} 0;
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing[4]};
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "about about about contact" "experience experience experience experience" "education education languages languages";
`;
