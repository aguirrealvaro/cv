import { FunctionComponent } from "react";
import styled from "styled-components";
import { Card, CardText, CardTitle } from "@/css";

export const Languages: FunctionComponent = () => {
  return (
    <Container>
      <Card>
        <CardTitle>Languages</CardTitle>
        <CardText>Spanish: Native</CardText>
        <CardText>English: Advanced</CardText>
        <CardText>Portuguese: Intermediate</CardText>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  grid-area: languages;
`;
