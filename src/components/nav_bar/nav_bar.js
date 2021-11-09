import { useHistory } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Button, ButtonConainer, FlexDiv, MenuContainer, Nav, NavButton, NavContainer, ResultsContainer, SearchResult } from "../../styled_components/components";
import Search from "./search/search";
import useWindowSize from "../../util/window-size";

function NavBar() {
    const history = useHistory();
    // custom hook, returns an object with width and height
    const size = useWindowSize();

    // store the search params on input change
    const [params, setParams] = useState('');
    // store the search results
    const [results, setResults] = useState([]);
    // bring up the dropdown when focus is on the search input
    const [search, setSearch] = useState(false);
    // toggle the mobile menu dropdown
    const [viewMenu, setViewMenu] = useState(false);


    return (
        <NavContainer>
            <Nav>
                <Button onClick={() => history.push('/')}>Home</Button>
                {/* <h2 onClick={() => history.push('/')}>Home</h2> */}
                {size.width > 750 && (
                    <>
                        <Search 
                            setSearch={setSearch} 
                            params={params} 
                            setParams={setParams} 
                            setResults={setResults} 
                            size={size}
                        />
                        <ButtonConainer>
                            <Button onClick={() => history.push('/about')}>About</Button>
                            <Button onClick={() => history.push('/rescue')}>Rescue</Button>
                        </ButtonConainer>
                    </>
                )}
                {size.width < 750 && (
                    <ButtonConainer>
                        <Button onClick={() => setViewMenu(!viewMenu)}><i className="fas fa-bars"></i></Button>
                    </ButtonConainer>
                )}
            </Nav>
            {viewMenu && (
                <MenuContainer>
                    <NavButton 
                        onClick={() => {
                            setViewMenu(false);
                            setSearch(!search);
                    }}>Search</NavButton>
                    <NavButton onClick={() => history.push('/about')}>About</NavButton>
                    <NavButton onClick={() => history.push('/rescue')}>Rescue</NavButton>
                </MenuContainer>
            )}
            {search && (
                <ResultsContainer>
                    {size.width < 750 && (
                        <Search 
                            setSearch={setSearch} 
                            params={params} 
                            setParams={setParams} 
                            setResults={setResults}
                            size={size}
                        />
                    )}
                    <FlexDiv>
                        <h2>Search Results</h2>
                        <Button onClick={() => {
                            setParams('');
                            setSearch(false);
                        }}><i className="fas fa-times fa-2x"></i></Button>
                    </FlexDiv>
                    {results.length > 0 && results.map((result, index) => (
                        <SearchResult
                            onClick={() => {
                                setParams('');
                                setSearch(false);
                                if (!result.message) {
                                    history.push(`/rescue/${result.title?.split(' ').join('').toLowerCase()}`)
                                }
                            }}
                            key={uuidv4()}>
                            {result.message ? <p>{result.message}</p> :   
                                <> 
                                <h3>{result.title}</h3>
                                <p>{result.description}</p>
                                </>
                            }
                        </SearchResult>
                    ))}
                </ResultsContainer>
            )}

        </NavContainer>
    )
}

export default NavBar;
