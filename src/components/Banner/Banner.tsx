import React, { FunctionComponent } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Wrapper } from "@/css";
import { originalImageWitdth } from "@/css/commonStyles";

export const Banner: FunctionComponent = () => {
  return (
    <Container>
      <Wrapper>
        <InnerContainer>
          <ImageWrapper>
            <Image src="/images/avatar.jpg" layout="fill" alt="Alvaro Aguirre Avatar" />
          </ImageWrapper>
          <TextContainer>
            <Title>Alvaro Aguirre</Title>
            <div>
              <Subtitle>Frontend developer</Subtitle>
              <Subtitle>Degree in Computer Science</Subtitle>
            </div>
            <Location>Buenos Aires, Argentina</Location>
          </TextContainer>
        </InnerContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.grey[8]};
  padding: ${({ theme }) => theme.spacing[6]} 0;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  ${originalImageWitdth};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
  > span {
    margin-top: -1rem !important;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.grey[2]};
  font-size: ${({ theme }) => theme.typography.fontSizes["3xl"]};
`;

const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.grey[5]};
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
`;

const Location = styled.span`
  color: ${({ theme }) => theme.colors.grey[5]};
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
`;
