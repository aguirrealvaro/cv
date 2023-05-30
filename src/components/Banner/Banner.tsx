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
            <Image
              src="/images/avatar.jpg"
              alt="Alvaro Aguirre Avatar"
              width={3024}
              height={4032}
            />
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

const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.grey[8]};
  padding: ${({ theme }) => theme.spacing[6]} 0;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ImageWrapper = styled.div`
  > img {
    border-radius: ${({ theme }) => theme.borderRadius.full};
    width: 200px;
    height: 200px;
    object-fit: cover;
    ${({ theme }) => theme.breakpoint("md")} {
      width: 150px;
      height: 150px;
    }
    ${({ theme }) => theme.breakpoint("xs")} {
      width: 100px;
      height: 100px;
    }
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
