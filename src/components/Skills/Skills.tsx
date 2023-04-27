import { FunctionComponent } from "react";
import styled from "styled-components";
import { Card, CardTitle } from "@/css";

export const Skills: FunctionComponent = () => {
  return (
    <Container>
      <Card>
        <CardTitle>Skills</CardTitle>
        <ul>
          <Item>React</Item>
          <Item>Typescript</Item>
          <Item>Next</Item>
          <Item>React Query</Item>
          <Item>Styled Components</Item>
          <Item>Design Systems</Item>
          <Item>React Testing Library</Item>
          <Item>Git</Item>
          <Item>Redux</Item>
          <Item>Node</Item>
          <Item>Express</Item>
          <Item>Nest</Item>
          <Item>Relational databases</Item>
        </ul>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  grid-area: skills;
`;

const Item = styled.li`
  margin-left: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  &:last-child {
    margin-bottom: 0;
  }
`;
