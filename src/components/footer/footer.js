import { FootContainer, ListContainer, SmallSplitSection, LinksContainer } from "../../styled_components/components";

function Footer() {

    return (
        <FootContainer>
            <h1>Shameless Plugs</h1>
            <SmallSplitSection>
                <ListContainer>
                    <h4>My Sites</h4>
                    <LinksContainer>
                        <a rel="noopener noreferrer" target='_blank' href='https://cotter.tech'>Portfolio</a>
                        <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/sean-cotter-43572417/'>LinkedIn</a>
                    </LinksContainer>
                </ListContainer>
                <ListContainer>
                    <h4>My Projects</h4>
                    <LinksContainer>
                        <a rel="noopener noreferrer" target='_blank' href='https://workday-app.herokuapp.com/'>WorkDay</a>
                        <a rel="noopener noreferrer" target='_blank' href='https://vicariously.herokuapp.com/'>Vicariously</a>
                        <a rel="noopener noreferrer" target='_blank' href='https://anarchy-app.herokuapp.com/about'>Anarchy</a>
                    </LinksContainer>
                </ListContainer>
            </SmallSplitSection>
        </FootContainer>
    )
}

export default Footer;