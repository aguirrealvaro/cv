import { FunctionComponent } from "react";
import styled from "styled-components";
import { SingleExperience } from "./SingleExperience";
import { Card, CardTitle } from "@/css";

export const Experience: FunctionComponent = () => {
  return (
    <Container>
      <Card>
        <CardTitle>Work Experience</CardTitle>
        <InnerContainer>
          <SingleExperience
            role="Frontend Team Lead"
            company="BlockFi (Phinx Lab)"
            description="I led a small team in the development of Trading, performing frontend tasks and launching high-impact features on the web app. I contributed to the success of the product, resulting in a significant improvement in the user experience and an increase in user engagement."
            startTime="Oct 2020"
            endTime="Dec 2022"
          />
          <SingleExperience
            role="Frontend Developer"
            company="BlockFi (Phinx Lab)"
            description="I collaborated with the team to redesign and rebuild the Trading product from scratch, and also contributed to its ongoing maintenance and improvements."
            startTime="Jan 2020"
            endTime="Oct 2020"
          />
          <SingleExperience
            role="Fullstack Web Developer"
            company="Cohiue Software"
            description="I have built different custom websites for various clients using React and Node for frontend and backend, respectively. I have also worked with relational databases to store and access important site data."
            startTime="Sep 2019"
            endTime="Dec 2019"
          />
          <SingleExperience
            role="Web developer"
            company="Freelance"
            description="Static websites developed for clients as a freelancer using HTML, CSS, and Javascript according to their needs."
            startTime="Mar 2019"
            endTime="Sep 2019"
          />
        </InnerContainer>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  grid-area: experience;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`;
