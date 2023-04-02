import React, { FunctionComponent } from "react";
/* import Image from "next/image"; */
import styled from "styled-components";

export const Banner: FunctionComponent = () => {
  return (
    <Container>
      <AvatarContainer>
        {/* <Image src="/images/avatar.jpg" fill alt="Alvaro Aguirre Avatar" />
        <div>hola</div> */}
      </AvatarContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const AvatarContainer = styled.div`
  width: 30px;
  height: 30px;
`;
