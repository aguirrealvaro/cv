import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

export const originalImageWitdth = css`
  > span {
    position: unset !important;
  }
  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.assets.bgSecondary};
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  height: 100%;
`;

export const CardTitle = styled.h4`
  color: ${({ theme }) => theme.assets.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const CardText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  &:last-child {
    margin-bottom: 0;
  }
`;
