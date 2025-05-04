import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WrapperSlider from '../WrapperSlider/WrapperSlider';

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  // align-items: center;
  // justify-content: center;
  color: white;
  font-size: 2em;
  position: absolute;
  top: 0;
  left: ${({ offset }) => offset * 100}%;
  transition: left 0.5s ease;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  padding: 30px;
  cursor: pointer;
  ${({ direction }) => (direction === 'prev' ? 'left: 10px;' : 'right: 10px;')}

  svg {
    width: 60px;
    height: 60px;
    fill: white;
  }

  &:hover svg {
    fill: rgba(255, 255, 255, 0.8);
  }
`;

const BottomNav = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

const NavLine = styled.div`
  width: 40px;
  height: 5px;
  background-color: ${({ isActive }) => (isActive ? 'white' : 'rgba(255, 255, 255, 0.5)')};
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: white;
  }
`;


const slide1 = <WrapperSlider src={"./src/assets/Home1.jpg"} text={"DESCOVER NEW WAYS"} p={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore"}/>; 
const slide2 = <WrapperSlider src={"./src/assets/Home2.jpg"} text={"DESCOVER NEW WAYS"} p={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore"}/>;
const slide3 = <WrapperSlider src={"./src/assets/Home3.jpg"} text={"DESCOVER NEW WAYS"} p={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore"}/>;
const slide4 = <WrapperSlider src={"./src/assets/Home3.jpg"} text={"DESCOVER NEW WAYS"} p={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore"}/>;

const slides = [slide1, slide2, slide3,slide4];


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setIsTransitioning(true);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setIsTransitioning(true);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index + 1);
    setIsTransitioning(true);
  };

  // Keyboard event listener for ArrowLeft and ArrowRight keys
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        goToNextSlide();
      } else if (event.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    let animationFrame;
    const autoSlide = () => {
      animationFrame = requestAnimationFrame(() => {
        setTimeout(() => {
          goToNextSlide();
          autoSlide();
        }, 5000);
      });
    };
    autoSlide();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      const transitionEndHandler = () => {
        setIsTransitioning(false);

        if (currentIndex === slides.length + 1) {
          setCurrentIndex(1);
        } else if (currentIndex === 0) {
          setCurrentIndex(slides.length);
        }
      };

      document.addEventListener('transitionend', transitionEndHandler);
      return () => document.removeEventListener('transitionend', transitionEndHandler);
    }
  }, [currentIndex, isTransitioning]);

  return (
    <SliderContainer>
      {[slides[slides.length - 1], ...slides, slides[0]].map((slide, index) => (
        <Slide
          key={index}
          offset={index - currentIndex}
          style={{ transition: isTransitioning ? 'left 0.5s ease' : 'none' }}
        >
          {slide}
        </Slide>
      ))}

      <NavButton direction="prev" onClick={goToPrevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
        </svg>
      </NavButton>
      <NavButton direction="next" onClick={goToNextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z" />
        </svg>
      </NavButton>
      <BottomNav>
        {slides.map((_, index) => (
          <NavLine
            key={index}
            isActive={index + 1 === currentIndex || (index === 0 && currentIndex === slides.length + 1)}
            onClick={() => goToSlide(index)}
          />
        ))}
      </BottomNav>
    </SliderContainer>
  );
};

export default Slider;
