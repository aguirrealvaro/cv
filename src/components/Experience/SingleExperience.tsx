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
        <Line />
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
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${({ theme }) => theme.spacing[12]};
`;

const Role = styled.span`
  display: block;
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

const Line = styled.span`
  width: 1px;
  height: 15px;
  background-color: ${({ theme }) => theme.colors.black};
  align-self: center;
  margin: 4px 0;
`;
