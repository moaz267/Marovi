import React from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <StyledWrapper>
      <input type="text" name="text" placeholder="Search 'Here'" className="input" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .input[type = "text"] {
    display: block;
    color: rgb(34, 34, 34);
    background: linear-gradient(142.99deg, rgba(217, 217, 217, 0.63) 15.53%, rgba(243, 243, 243, 0.63) 88.19%);
    box-shadow: 0px 12px 24px -1px rgba(0, 0, 0,0.18);
    border-color: rgba(7, 4, 14, 0);
    border-radius: 50px;
    block-size: 20px;
    margin: 7px auto;
    padding: 18px 15px;
    outline: none;
    text-align: center;
    width: 200px;
    transition: 0.5s;
  }

  .input[type = "text"]:hover {
    width: 240px;
  }

  .input[type = "text"]:focus {
    width: 280px;
  }`;

export default Input;
