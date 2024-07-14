// import { useState } from 'react';
// import { useEffect } from 'react';
import './home.css';


const Home = () => {

    // useEffect( () => {
    //     const element =  document.querySelector(".introImage");

    // const startAnimation = () => {
    //     element.style.animationPlayState = 'running';
    // };

    // const pauseAnimation = () => {
    //     element.style.animationPlayState = 'paused';
    // };

    // const handleIntersection = (entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             startAnimation();
    //         } else {
    //             pauseAnimation();
    //         }
    //     },{
    //         rootMargin:"0px",
    //         threshold: 0.1
    //     });
    // };

    // const observer = new IntersectionObserver(handleIntersection, {
    //     root: null, 
    // });

    // observer.observe(element);

    // })

    
    return ( 
    <div id="home">
        <div id="intro">
            <img class="introImage" alt="" src="https://i.pinimg.com/564x/20/db/0f/20db0ffb0c7b1417b96e458c3559bf43.jpg" />
            <p id="intro-text">
                <p>Be a</p>
                <p>CAMPUS AMBASSADOR</p>
                <p>Empower our voice and lead the way.</p>
            </p>
        </div>
        <div id="about">
            <div class="imgDiv" >
                <img alt="" id="bigOneLeft" src="https://i.pinimg.com/originals/d8/ab/6f/d8ab6f036ad7fc6b207cd39e20e50845.jpg" />
                <img alt="" id="smallOneLeft" src="https://i.pinimg.com/564x/c6/1c/dc/c61cdce503d83dde700867f3828e4e14.jpg"/>
            </div>
            <div id="about-text">
            <h1>About Us</h1>
            <p>Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends, Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. </p><br></br>
            <p>The series was mainly produced by David Heyman, and stars Daniel Radcliffe, Rupert Grint, and Emma Watson as the three leading characters: Harry Potter, Ron Weasley, and Hermione Granger. Four directors worked on the series: Chris Columbus, Alfonso Cuarón, Mike Newell, and David Yates. Michael Goldenberg wrote the screenplay for Harry Potter and the Order of the Phoenix (2007), while the remaining films' screenplays were written by Steve Kloves. Production took place over ten years, with the main story arc following Harry's quest to overcome his arch-enemy Lord Voldemort.</p>
            </div>
        </div>
    </div> ); 
}
 
export default Home;