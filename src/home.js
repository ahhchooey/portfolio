import React, {useEffect} from "react";
import "./styles/home.css";


function Home() {

  useEffect(() => {

    let typewriter;
    let homeText = "";
    let loopNum = 0;
    let isDeleting = false;
    let periodPause = 2000;

    const thingsToSay = [
      `Hi, I'm Alex.`,
      `I'm a software developer.`,
      `For me, it's all about the culture and fit.`,
      `I'm sure we'll find something that will benefit both of us.`,
      `As long as you pay me.`,
      `And I get to do whatever I want.`,
      `You might have forgotten as to who I am already.`,
      `I'm Alex.`,
      `Don't quote me.`,
      `Bye.`,
      `Go away.`,
      `Bye.`,
      `...`
    ]

    const thingsToSay2 = [
      `Hi, I'm Alex.`,
      `I'm a software developer.`,
      ``
    ]

    const type = () => {
      typewriter = typewriter || document.querySelector(".typewriter");
      const i = loopNum % thingsToSay.length;
      const text = thingsToSay[i];

      if (isDeleting) {
        homeText = text.substring(0, homeText.length - 1);
        typewriter.innerHTML = homeText;
      } else {
        homeText = text.substring(0, homeText.length + 1);
        typewriter.innerHTML = homeText;
      }

      let typeSpeed = 150 - Math.random() * 100; 
      if (isDeleting) typeSpeed /= 2;

      if (!isDeleting && homeText === text) {
        typeSpeed = periodPause;
        isDeleting = true;
      } else if (isDeleting && homeText === '') {
        isDeleting = false;
        loopNum++;
        typeSpeed = 500;
      }

      setTimeout(() => {
        type();
        }, typeSpeed);
    }

    type();

  }, [])

  return (
    <div className="home">

      <div className="typewriter"></div>


      <div className="aboutme">
        <div className="topbar">

          <div className="topbar-buttons">
            <div className="topbar-button exit"></div>
            <div className="topbar-button minimize"></div>
            <div className="topbar-button maximize"></div>
          </div>

          <div className="titlebar">
            About
          </div>

          <div className="mac-symbols">&#8997;&#8984;2</div>

        </div>

        <div className="aboutme-body">
          <div>
            Welcome to my site. Feel free to click around on all the blue links, or use the terminal to navigate if you want.
          </div>
          <br/>
          <div>
            I'm Alex. I am a software engineer that likes to build cool things. Before entering the software world, I was a biology researcher in cellular development. I love to tackle difficult and interesting problems to hopefully create a positive impact on the world.
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home;
