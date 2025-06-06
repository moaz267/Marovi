import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Radio = () => {
  const navigate = useNavigate();

  return (
    <StyledWrapper>
      <div className="input">
        <button className="value" onClick={() => navigate('/Modern')}>
        Modern
        </button>
        <button className="value" onClick={() => navigate('/Classic')}>
        Classic
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input {
    display: flex;
    flex-direction: column;
    width: 200px;
    background-color: #0d1117;
    justify-content: center;
    border-radius: 10px;
    transition: 1s;
    padding: 10px;
    overflow: hidden;
  }

  .value {
    font-size: 15px;
    background-color: transparent;
    border: none;
    padding: 10px;
    color: white;
    display: flex;
    position: relative;
    gap: 5px;
    cursor: pointer;
    border-radius: 10px;
    transition: 1s;
    box-sizing: border-box;
  }

  .value:not(:active):hover,
  .value:focus {
    display: flex;
    box-sizing: border-box;
    border: 2px solid #1a1f24;
    color: white;
  }

  .value:focus,
  .value:active {
    background-color: #1a1f24;
    outline: none;
    margin-left: 17px;
  }

  .value::before {
    content: "";
    position: absolute;
    top: 5px;
    left: -15px;
    width: 5px;
    height: 80%;
    background-color: #2f81f7;
    border-radius: 5px;
    opacity: 0;
    transition: 1s;
  }

  .value:focus::before,
  .value:active::before {
    opacity: 1;
  }

  .value svg {
    width: 20px;
  }

  .input:hover > :not(.value:hover) {
    transition: 300ms;
    filter: blur(1.5px);
    transform: scale(0.95, 0.95);
  }
`;

export default Radio;
