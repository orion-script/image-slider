import React from "react";
import { useState } from "react";

interface Photo {
  id: number;
  url: string;
}

interface SliderProps {
  Photos: Photo[];
}

const Sliders: React.FC<SliderProps> = ({ Photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    const isLastSlide = currentIndex === Photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <>
        <span onClick={goToPrevious} className="leftArrowStyles">
          ❰
        </span>
        <span onClick={goToNext} className="rightArrowStyles">
          ❱
        </span>
      </>

      <img src={Photos[currentIndex].url} alt="" />
      <div className="dotscontainer">
        {Photos.map((slide, index) => (
          <div
            className={`dots ${index === currentIndex ? "active" : ""}`}
            key={slide.id}
            onClick={() => goToSlide(index)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sliders;
