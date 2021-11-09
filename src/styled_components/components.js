import styled from "styled-components";

export const NavContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-shadow: 0 0 10px white;
`;

export const Nav = styled.nav`
  background-color: rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  height: 8vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  max-width: 1400px;
  border-radius: 5px;

  h2 {
      padding: 5px;
  }

  h2:hover {
      cursor: pointer;
      border: 1px solid lightgray;
      box-shadow: 0 0 10px white;
      border-radius: 5px;
  }

  @media (max-width: 750px) {
      justify-content: space-between;
      width: 90%;
      border-radius: 5px;
  }
`;

export const LinksContainer = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 20%;
    height: 100%;
    gap: 15px;

    .navlink {
        text-decoration: none;
        color: black;
    }

    .navlink:hover {
        border: 1px solid lightgray;
        box-shadow: 0 0 10px white;
        padding: 5px;
        border-radius: 5px;
    }
`;

 export const SearchContainer = styled.div`
        width: 50%;
        height: 50%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border: 1px solid gray;
        border-radius: 5px;
        box-shadow: 0 0 10px white;

        input {
            padding: 15px;
            width: 90%;
            border: none;
            background: none;
        }

        input:focus {
            outline: none;
        }

        button {
            border: none;
            background: none;
            cursor: pointer;
            width: 10%;
            padding: 0;
            margin: 0;

            i {
                color: gray;
            }
        }
`;

export const ResultsContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative
    background-color: white;
`;

export const SearchResult = styled.div`
    width: 80%;
    height: fit-content;
    display: flex;
    gap: 10px;
    padding: 5px;
    
    &:hover {
        cursor: pointer;
        border: 1px solid gray;
        box-shadow: 0 0 10px white;
        border-radius: 5px;
    }
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 10vh;
    width: 100%;
    max-width: 1400px;
    height: 100%;
    gap: 2vh;

    @media (max-width: 768px) {
        margin-top: 2vh;
    }
`;


export const Container = styled.section`
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
    font-size: 1.5vh;
    text-align: left;
    line-height: 1.5;
    gap: 1vh;
    box-shadow: 10px 5px 10px gray;

    * {
        margin: 0;
    }

    h2 {
        text-decoration: underline;
    }
    
    h1 {
        font-size: 3vh;
    }

    @media (max-width: 768px) {
        font-size: 1.2vh;
    }
`;


export const SplitSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 5vw;
    width: 100%;
    height: 40vh;

    p {
        width: 50%;
        // font-size: 1.8vh;
    }
`;

export const SmallSplitSection = styled.section`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    width: 100%;
`;

export const ListContainer = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
    gap: 2vh;
    padding: 10px;

    h4 {
        text-decoration: underline;
    }

    a {
        text-decoration: none;
        color: black;
        border: 1px solid lightgray;
        padding: 5px;
        border-radius: 5px;
        box-shadow: 5px 5px 5px gray;
    }

    a:hover {
        box-shadow: 0px 0px 5px lightgray;
    }

    section {
        display: flex;
        gap: 1vw;
        justify-content: center;
        width: 100%;

        * {
            margin: 0;
        }
        @media (max-width: 768px) {
            font-size: 1vh;
        }
    }

    * {
        margin: 0;
        padding: 0;
    }

    @media (max-width: 768px) {
        font-size: 1.2vh;
    }
`;

export const Image = styled.img`
    width: 50%;
    height: 80%;
    border-radius: 5px;
    box-shadow: 10px 5px 10px gray;
    transition: all 2s ease;
`;

export const FootContainer = styled.footer`
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.2vw;
    position: fixed;
    bottom: 0;
    box-shadow: 0 0 10px white;

    h1 {
        text-decoration: underline;
        font-size: 2vh;
    }

    * {
        margin: 0;
    }
`;



export const FlexDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 100%;
    gap: 1vh;
    padding: 10px;

    h2 {
        text-decoration: underline;
    }

    button {
        border: none;
        background: none;
    }

    button:hover {
        cursor: pointer;
        border: 1px solid gray;
        box-shadow: 0 0 10px gray;
        border-radius: 5px;
    }

    img {
        height: 40%;
        width: 40%;
        position: sticky;
        
    }

    @media (max-width: 768px) {
        img {
            display: none;
        }
    }
`;

export const ColDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: fit-content;
    gap: 1vh;
    padding: 10px;
`;




