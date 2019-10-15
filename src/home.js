import React, {useEffect} from "react";
import "./styles/home.css";


function Home() {

  let loopNum = 0;
  let isDeleting = false;
  let periodPause = 2000;

  let homeText = "";
  const thingsToSay = [
    `Hi, I'm Alex.`,
    `I'm a software developer.`,
    `For me, it's all about the culture and fit.`
  ]

  useEffect(() => {
    type();
  }, [])

  let typewriter;

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


  return (
    <div className="home">
      <div className="typewriter">
        Hi, I'm Alex.
      </div>
    </div>
  )
}

export default Home;
