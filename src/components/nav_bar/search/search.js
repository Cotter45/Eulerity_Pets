import styled from "styled-components";



function Search() {
    
    const SearchContainer = styled.div`
        width: 50%;
        height: 60%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border: 1px solid gray;
        border-radius: 5px;
        box-shadow: 0px 0px 5px gray;

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

    return (
        <SearchContainer className="search">
            <input type="text" placeholder="Search by name or description" />
                <button>
                    <i className="fas fa-search fa-2x"></i>
                </button>
        </SearchContainer>
    )
}

export default Search;