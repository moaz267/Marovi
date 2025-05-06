import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Radio = () => {
  const { i18n } = useTranslation();
  const [isArabic, setIsArabic] = useState(false);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsArabic(lang === 'ar');
  };

  return (
    <StyledWrapper dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="radio-input">
        <div className="glass">
          <div className="glass-inner" />
        </div>
        <div className="selector">
          <div className="choice">
            <div>
              <input
                className="choice-circle"
                defaultChecked={!isArabic}
                value="en"
                name="language"
                id="one"
                type="radio"
                onChange={() => handleLanguageChange('en')}
              />
              <div className="ball english" />
            </div>
            <label htmlFor="one" className="choice-name">English</label>
          </div>
          <div className="choice">
            <div>
              <input
                className="choice-circle"
                value="ar"
                name="language"
                id="two"
                type="radio"
                onChange={() => handleLanguageChange('ar')}
              />
              <div className="ball arabic" />
            </div>
            <label htmlFor="two" className="choice-name">Arabic</label>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  .radio-input {
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: flex-start;
    ${props => props.dir === 'rtl' && `
      flex-direction: row-reverse;
    `}
  }

  .glass {
    z-index: 2;
    height: 110%;
    width: 35px;
    margin-right: 5px;
    padding: 1px;
    background-color: rgba(190, 189, 189, 0.5);
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.2) 0px 20px 50px -10px,
      rgba(0, 0, 0, 0.25) 0px 10px 30px -15px,
      rgba(10, 37, 64, 0.26) 0px -2px 8px 0px inset;
    backdrop-filter: blur(2px); 
  }

  .glass-inner {
    width: 100%;
    height: 100%;
    border-color: rgba(245, 245, 245, 0.45);
    border-width: 2px;
    border-style: solid;
    border-radius: 10px;
  }

  .selector {
    display: flex;
    flex-direction: column;
  }

  .choice {
    margin: 3px 0;
    display: flex;
    align-items: center;
  }

  .choice > div {
    position: relative;
    width: 16px;
    height: 16px;
    margin-right: 4px;
    z-index: 0;
  }

  .choice-circle {
    appearance: none;
    height: 100%;
    width: 100%;
    border-radius: 100%;
    border-width: 2px;
    border-style: solid;
    border-color: rgba(245, 245, 245, 0.45);
    cursor: pointer;
    box-shadow: 0px 0px 10px -5px gray, 0px 0px 10px -5px gray inset; /* زيادة الظلال */
  }

  .ball {
    z-index: 1;
    position: absolute;
    inset: 0px;
    transition: transform 500ms ease-in-out; /* زيادة وقت التحول ليصبح أبطأ */
    box-shadow: rgba(0, 0, 0, 0.17) 0px -5px 6px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -7px 7px 0px inset;
    border-radius: 100%;
    background-color: rgb(232, 232, 232, 1);
  }

  .ball.english {
    transform: ${({ isArabic }) => isArabic ? 'translateX(0px)' : 'translateX(-75px)'};
  }

  .ball.arabic {
    transform: ${({ isEnglish }) => isEnglish ? 'translateX(0px)' : 'translateX(-30px)'};
  }

  .choice-circle:checked + .ball {
    transform: translateX(0px);
  }

  .choice-name {
    color: rgb(177, 176, 176);
    font-size: 12px;
    font-weight: 600;
    font-family: monospace;
    cursor: pointer;
  }
`;



export default Radio;
