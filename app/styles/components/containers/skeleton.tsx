import styled, { keyframes } from "styled-components";
const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const Skeleton = styled.div<{
  width: number;
  height: number | null;
}>`
  background-color: darkGrey;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  display: inline-block;
  animation: ${fadeOut} 1.2s ease-out infinite;
  animation-direction: alternate;
  border-radius: 10px;
  margin: 0 auto;
  margin: 10px;
`;

export default Skeleton;
