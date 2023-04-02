import React, { FunctionComponent } from "react";
import Image from "next/image";
import styled from "styled-components";

export const Banner: FunctionComponent = () => {
  return (
    <Container>
      <AvatarContainer>
        <Image src="/images/avatar.jpg" height={200} width={200} alt="Alvaro Aguirre Avatar" />
      </AvatarContainer>
      <div>hola</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AvatarContainer = styled.div`
  border-radius: 100px;
  overflow: hidden;
`;
