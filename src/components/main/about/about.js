import * as Fireworks from 'fireworks-canvas';
import { useState, useEffect } from 'react';

import { MainContainer, Overlay } from "../../../styled_components/components";
import Footer from '../../footer/footer';

function About() {


    useEffect(() => {

        const container = document.getElementById('hooray');
        const fireworks = new Fireworks(container);
        fireworks.resetSize();
        const interval = setInterval(() => {
            fireworks.fire()
        }, 300)


        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <MainContainer id='hooray'>
            <Overlay>
                <h1>Thank you for the fun little project!</h1>
                <h2>I hope you enjoyed it!</h2>
                <p>
                    I took this opportunity to play with some packages I've been
                    interested in learning more about. I thought it was a great opportunity 
                    to implement a drag n drop, hopefully not overkill, but it was fun. This was also
                    my first time using styled components, and I'm glad I did. I feel like I've only 
                    scratched the surface of what I can do with them. 
                </p>
                <p>
                    I also wanted to say thank you for not just throwing DS&A style questions at 
                    me, it can be exhausting and takes up way too much of my time these days.
                    If you've got any questions, feel free to reach out to me at any time of day/night. 
                    Chances are I'll be at my computer, hopefully working on a new feature or project 
                    and not grinding LeetCode. 
                </p>
            </Overlay>
            <Footer />
        </MainContainer>
    )
}

export default About;