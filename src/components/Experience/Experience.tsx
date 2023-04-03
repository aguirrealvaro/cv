import { FunctionComponent } from "react";
import styled from "styled-components";
import { SingleExperience } from "./SingleExperience";
import { Card, CardTitle } from "@/css";

export const Experience: FunctionComponent = () => {
  return (
    <Container>
      <Card>
        <CardTitle>Work Experience</CardTitle>
        <SingleExperience
          role="Web developer"
          company="Freelance"
          description="Static websites developed for clients as a freelancer using HTML, CSS, and Javascript according to their needs."
          startTime="2018"
          endTime="2019"
        />
      </Card>
    </Container>
  );
};

const Container = styled.div`
  grid-area: experience;
`;
