import { useEffect } from "react";
import { useSelector } from "react-redux";

import { SearchContainer } from "../../../styled_components/components";


function Search({ setParams, params, setResults, setSearch, size }) {

    const pets = useSelector(state => state.Pets_Data.pets);
    
    useEffect(() => {
        if (params.length <= 1) {
            setResults([]);
            return;
        }
        const debounce = setTimeout(() => {
            // filter pets by name or description
            const results = pets.filter(pet => {
                return pet.title.toLowerCase().includes(params.toLowerCase()) || pet.description.toLowerCase().includes(params.toLowerCase());
            });

            // if there are results, set them or set message
            if (results.length > 0) {
                setResults(results);
            } else {
                setResults([{
                    message: "No results found"
                }]);
            }
        }, 500)

        return () => clearTimeout(debounce);
    }, [params, params.length, pets, setResults])

    return (
        <SearchContainer>
            <input 
                onChange={(e) => setParams(e.target.value)} 
                value={params} 
                type="text" 
                placeholder="Search by name or description" 
                onFocus={() => {
                    if (size.width > 750) setSearch(true)
                }}
            />
            <button>
                <i className="fas fa-search fa-2x"></i>
            </button>
        </SearchContainer>
    )
}

export default Search;