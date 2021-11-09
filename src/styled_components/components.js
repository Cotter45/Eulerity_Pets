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
  background-color: rgba(255, 255, 255, 0.4);
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

  button {
      height: 60%;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  div {
      height: 60%;
  }

  @media (max-width: 750px) {
      justify-content: space-between;
      width: 90%;
      border-radius: 5px;
  }
`;

export const MenuContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px gray;
    position: fixed;
    right: 0;
    top: 8vh;
    width: 150px;
    background-color: white;
    border-radius: 5px;
    padding: 10px;

    button {
        width: 80%;
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
        font-size: 1vh;

        i {
            color: gray;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
        box-shadow: none;

        input::placeholder {
            color: black;
        }
        
        * {
            color: white;
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

    button {
        font-size: 1vh;
    }
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
    justify-content: center;
    margin-top: 5vh;
    width: 100%;
    height: 55vh;
    max-width: 1400px;
    gap: 2vh;
    padding: 20px;

    @media (max-width: 768px) {
        margin-top: 2vh;
    }
`;


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 75%;
    height: 100%;
    // max-height: 100%;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 20px;;
    border-radius: 5px;
    font-size: 1.5vh;
    text-align: left;
    line-height: 1.2;
    gap: 2vh;
    box-shadow: 10px 5px 10px gray;

    * {
        margin: 0;
    }

    .description-box {
        max-height: 150px;
    }

    h2 {
        text-decoration: underline;
        font-size: 2vw;
    }
    
    h2:hover {
        cursor: pointer;
    }

    h1 {
        font-size: 3vh;
    }

    @media (max-width: 768px) {
        font-size: 1.2vh;

        h2 {
            font-size: 2vh;
        }

        h1 {
            font-size: 3.5vw;
        }
    }
`;


export const SplitSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 5vw;
    width: 80%;
    height: 75%;

    img {
        max-width: 400px;
        max-height: 300px;
    }

    p {
        width: 50%;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 60%;
        gap: 3vw;

        .image {
            width: 200px;
            height: 200px;
            max-width: 50%;
            max-height: 200px;
        }

        p {
            width: 100%;
            line-height: 1.5;
        }
    }
    
`;

export const SmallSplitSection = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 2vw;
    border-radius: 5px;
    max-height: 80%;

    p {
        font-size: 2vh;
        text-align: center;
    }

    button {
        height: 40%;
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 768px) {
        gap: 5vw;

        p {
            font-size: 1.5vh;
        }
    }
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
    height: auto;
    max-width: 500px;
    max-height: 400px;
    border-radius: 5px;
    box-shadow: 10px 5px 10px gray;
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
    justify-content: center;
    width: 80%;
    height: 100%;
    gap: 5vh;
    padding: 10px;

    h2 {
        text-decoration: underline;
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
    text-align: center;
    width: 60%;
    height: 100%;
    max-height: 60vh;
    gap: 1vh;
    padding: 10px;
    border-radius: 5px;

    img {
        height: 100%;
        width: 100%;
        border-radius: 5px;
    }

    `;
    
export const ColGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1vh;
    width: 100%;
    height: 60vh;
    overflow-y: scroll;
    padding: 20px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.2);
    scrollbar-width: none;
    
    ::-webkit-scrollbar {
        display: none;
    }


    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 1vh;
        width: 80%;
        height: 100%;
        overflow-y: scroll;
        padding: 10px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

export const Card = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: fit-content;
    height: 25vh;
    padding: 10px;
    border: 1px solid lightgray;
    box-shadow: 5px 5px 10px gray;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.8);

    img {
        width: 100%;
        height: 80%;
        border-radius: 5px;
        object-fit: cover;
    }

    div {
        display: none;
        position: absolute;
        z-index: 1;
        width: 80%;
    }

    p {
        padding: 0;
        margin: 0;
        width: 100%;
        text-align: center;
    }

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 10px gray;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        width: 80%;
        height: fit-content;
        padding: 0;
        border: none;

        img {
            width: 100%;
            max-height: 100%;
            border-radius: 5px;
        }

        div {
            display: block;
            position: absolute;
            z-index: 1;
            width: 100%;
        }

        p {
            padding: 0;
            margin: 0;
        }
    }
`;

export const MainDragnDropContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    gap: 1vh;
    padding: 10px;
    border-radius: 5px;

    @media (max-width: 768px) {
        height: 85vh;
    }
`;

export const ButtonConainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vh;
    padding: 10px;
`;

export const Button = styled.button`
    font-size: 2vh;
    color: #494949 !important;
	text-transform: uppercase;
	text-decoration: none;
	background: #ffffff;
	padding: 20px;
	border: 4px solid #494949 !important;
	display: inline-block;
	transition: all 0.4s ease 0s;

    &:hover {
        cursor: pointer;
        color: #ffffff !important;
        background: #f6b93b;
        border-color: #f6b93b !important;
        transition: all 0.4s ease 0s;
    }
`;

export const NavButton = styled.button`
    font-size: 2vh;
    color: #494949 !important;
	text-transform: uppercase;
	text-decoration: none;
	background: #ffffff;
	padding: 20px;
	border: 4px solid #494949 !important;
	display: inline-block;
	transition: all 0.4s ease 0s;

    &:hover {
        cursor: pointer;
        color: #ffffff !important;
        background: #f6b93b;
        border-color: #f6b93b !important;
        transition: all 0.4s ease 0s;
    }
`;




