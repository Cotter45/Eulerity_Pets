import { useHistory } from "react-router-dom";

import { Nav } from "../../styled_components/components";
import Search from "./search/search";
import useWindowSize from "../../util/window-size";

function NavBar() {
    const history = useHistory();
    // custom hook, returns an object with width and height
    const size = useWindowSize();

    return (
        <Nav>
            <h2 onClick={() => history.push('/')}>Home</h2>
            {size.width > 750 && (
                <>
                    <Search />
                    <section>
                        router links
                    </section>
                </>

            )}
            {size.width < 750 && (
                <h2>Menu</h2>
            )}
        </Nav>
    )
}

export default NavBar;