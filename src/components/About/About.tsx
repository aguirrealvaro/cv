import { FunctionComponent } from "react";
import styled from "styled-components";
import { Card } from "@/components";

export const About: FunctionComponent = () => {
  return (
    <Card>
      <Title>About me</Title>
      <Paragraph>
        As a frontend developer with more than 4 years of experience working with React and
        TypeScript, and some backend skills using Node.js, I enjoy creating digital products
        that provide a great user experience, consistency, and follow best practices. I believe
        in writing clean and efficient code that&apos;s easy to maintain and scale. I am always
        willing to learn learn and stay up-to-date with the latest trends and technologies.
      </Paragraph>
      <Paragraph>I have European citizenship</Paragraph>
    </Card>
  );
};

const Title = styled.h4`
  color: ${({ theme }) => theme.assets.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Paragraph = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  &:last-child {
    margin-bottom: 0;
  }
`;
