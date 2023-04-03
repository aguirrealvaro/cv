import { FunctionComponent } from "react";
import styled from "styled-components";
import { Card, CardText, CardTitle } from "@/css";

export const Contact: FunctionComponent = () => {
  return (
    <Container>
      <Card>
        <CardTitle>Contact</CardTitle>
        <CardText>1aguirrealvaro@gmail.com</CardText>
        <CardText>(+54) 11 6324 7350</CardText>
        <CardText>
          <Anchor
            href="https://www.linkedin.com/in/aguirrealvaro"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/aguirrealvaro
          </Anchor>
        </CardText>
        <CardText>
          <Anchor
            href="https://github.com/aguirrealvaro"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/aguirrealvaro
          </Anchor>
        </CardText>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  grid-area: contact;
`;

const Anchor = styled.a`
  color: ${({ theme }) => theme.assets.primary};
`;
