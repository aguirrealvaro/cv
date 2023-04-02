import React, { FunctionComponent } from "react";
import Image from "next/image";
import styled from "styled-components";
import { originalImageWitdth } from "@/css/commonStyles";

export const Banner: FunctionComponent = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src="/images/avatar.jpg" layout="fill" alt="Alvaro Aguirre Avatar" />
      </ImageWrapper>
      <div>hola</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  ${originalImageWitdth};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
`;
