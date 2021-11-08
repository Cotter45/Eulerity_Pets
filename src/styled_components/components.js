import styled, { css } from "styled-components";

export const Nav = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20px;
  height: 10vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
    background-color: #2f4353;
    background-image: linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%);
`;


export const HeaderContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 80%;
    height: fit-content;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 20px;
    border-radius: 5px;
    font-size: 1.5vw;
    text-align: center;
    line-height: 1.5;
    gap: 1vh;
    @media (max-width: 768px) {
        font-size: 2.5vw;
    }
`;

export const SplitArticle = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    margin: 0 auto;
    width: 100%;
    height: 40vh;
`;

export const ImageCarousel = styled.img`
    width: 50%;
    height: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 10px 5px 10px gray;
`;