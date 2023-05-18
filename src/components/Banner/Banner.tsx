"use client";

import React, { FunctionComponent } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Wrapper } from "@/css";

export const Banner: FunctionComponent = () => {
  return (
    <Container>
      <Wrapper>
        <InnerContainer>
          <ImageWrapper>
            <Image src="/images/avatar.jpg" alt="Alvaro Aguirre Avatar" fill />
          </ImageWrapper>
          <TextContainer>
            <Title>Alvaro Aguirre</Title>
            <div>
              <Subtitle>Frontend Developer</Subtitle>
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
  overflow: hidden;
  position: relative; // not needed, only used to avoid warnings
  > img {
    position: static !important;
    object-fit: contain;
    height: auto !important;
    margin-top: -${({ theme }) => theme.spacing[4]};
  }
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-right: ${({ theme }) => theme.spacing[4]};
  > span {
    margin-top: -1rem !important;
  }
  ${({ theme }) => theme.breakpoint("md")} {
    width: 150px;
    height: 150px;
  }
  ${({ theme }) => theme.breakpoint("sm")} {
    width: 100px;
    height: 100px;
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
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
`;

const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.grey[5]};
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
`;

const Location = styled.span`
  color: ${({ theme }) => theme.colors.grey[5]};
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`;
