import styled from "styled-components";

const ImageModal = styled.div`
  position: fixed;
  width: 80vw;
  height: 80vh;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  z-index: 10;
  background-color: black;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  &:hover {
    background-size: ${({ isZoomed }) => isZoomed ? '150%' : 'cover'};
  }
`

export default ImageModal;