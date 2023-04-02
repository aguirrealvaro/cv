import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type CardProps = {
  children: ReactNode;
};

export const Card: FunctionComponent<CardProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.assets.bgSecondary};
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;
