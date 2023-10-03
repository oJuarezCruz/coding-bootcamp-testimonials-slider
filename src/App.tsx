import Attribution from "./Components/Attribution"
import Testimony from "./Components/Testimony";
import patternCurve from './pattern-curve.svg';
import imageTanya from './Components/Testimony/image-tanya.jpg';
import imageJohn from './Components/Testimony/image-john.jpg';
import { useState } from 'react';

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonies = [
    {
      src: imageTanya,
      alt: "Tanya",
      name: "Tanya Sinclair",
      quote: "“I've been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I'm now in the job of my dreams and so excited about the future.”",
      role: "UX Engineer"
    },
    {
      src: imageJohn,
      alt: "John",
      name: "John Tarkpor",
      quote: "“If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”",
      role: "Junior Front-end Developer"
    }
  ]

  return (
    <div className="w-full min-h-screen font-inter flex items-start lg:items-center justify-center">
      <Testimony
        src={testimonies[currentIndex].src}
        alt={testimonies[currentIndex].alt}
        name={testimonies[currentIndex].name}
        quote={testimonies[currentIndex].quote}
        role={testimonies[currentIndex].role}
        onClickPrev={() => setCurrentIndex(0)}
        onClickNext={() => setCurrentIndex(1)}
      />
      <img
        src={patternCurve}
        alt=""
        className="absolute bottom-0 left-0 z-0"
      />
      <Attribution />
    </div>
  )
}

export default App
