import { FunctionComponent } from "react";
import styled from "styled-components";

type SingleExperienceProps = {
  role: string;
  company: string;
  description: string;
  startTime: string;
  endTime: string;
};

export const SingleExperience: FunctionComponent<SingleExperienceProps> = ({
  role,
  company,
  description,
  startTime,
  endTime,
}) => {
  return (
    <Container>
      <TimeContainer>
        <span>{endTime}</span>
        <span>-</span>
        <span>{startTime}</span>
      </TimeContainer>
      <div>
        <Role>{role}</Role>
        <Company>{company}</Company>
        <Description>{description}</Description>
      </div>
    </Container>
  );
};

const Container = styled.span`
  display: flex;
  justify-content: space-between;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Role = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const Company = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const Description = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;
