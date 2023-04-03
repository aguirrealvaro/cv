import { FunctionComponent } from "react";
import styled from "styled-components";
import { Card, CardTitle } from "@/css";

export const Education: FunctionComponent = () => {
  return (
    <Container>
      <Card>
        <CardTitle>Education</CardTitle>
        <div>text!</div>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  grid-area: education;
`;
