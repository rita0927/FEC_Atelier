import styled from 'styled-components';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const Container1 = styled.div`
  display: flex;
  // justify-content: center;
  width: auto;
  position: relative;
`

export const Container2 = styled.div`
  display: flex;
`

export const Image = styled.img`
  height: 170px;
  width: 163px;
`


export const Category = styled.div`
  font-size: 12px;
  color: #696969;
`

export const Price = styled.div`
  font-size: 12px;
  color: #696969;
`

export const Anchor = styled.a`
  color: black;
  text-decoration: none;
`

export const Card = styled.div`
  border: 1px solid black;
  margin: 0 10px;
`

export const Add = styled.div`
  padding-top: 50px;
  border: 1px solid black;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AllOutfits = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 30px;
`

export const RelatedSection = styled.div`
  display: flex;
  justify-content: center;
`

export const InnerBox = styled.div`

`

export const Icon = styled.img`
  height: 17px;
  width: 17px;
  top: 8px;
  right: 8px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
`

export const Overlay = styled.div`
  position: relative;
`

export const LeftArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 40%;
  z-index: 5;
  cursor: pointer;
  left: 3px;
  color: black;
  height: 20px;
  width: 20px;
`

export const RightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 40%;
  z-index: 5;
  cursor: pointer;
  right: 3px;
  color: black;
  height: 20px;
  width: 20px;
`

export const Carousel = styled.div`
  display: flex;
  margin: 0 30px;
`