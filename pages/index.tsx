import Head from "next/head";
import styled from "styled-components";
import { Banner } from "@/components";
import { Wrapper } from "@/css";

const Home = () => {
  return (
    <Container>
      <Head>
        <title>CV | Alvaro Aguirre</title>
      </Head>
      <Banner />
      <Main>
        <Wrapper>asd</Wrapper>
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
  background-color: ${({ theme }) => theme.assets.bgPrimary};
`;
