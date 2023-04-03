import { FunctionComponent } from "react";
import styled from "styled-components";
import { SingleExperience } from "../Experience/SingleExperience";
import { Card, CardTitle } from "@/css";

export const Education: FunctionComponent = () => {
  return (
    <Container>
      <Card>
        <CardTitle>Education</CardTitle>
        <SingleExperience
          role="Degree in Computer Science"
          company="Universidad de Palermo"
          startTime="Jan 2016"
          endTime="Dec 2022"
        />
      </Card>
    </Container>
  );
};

const Container = styled.div`
  grid-area: education;
`;
