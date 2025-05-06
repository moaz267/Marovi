import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button>
        <div className="default-btn">
          <span>Add to Cart</span>
        </div>
        <div className="hover-btn">
          <svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth={2} stroke="#ffd300" height={20} width={20} viewBox="0 0 24 24"><circle r={1} cy={21} cx={9} /><circle r={1} cy={21} cx={20} /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
          <span>Shop Now</span>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
button {
  position: relative;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  background-color: hsl(255deg 50% 40%);
  border: solid 4px hsl(50deg 100% 50%);
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width:390px; /* ✅ تحديد العرض */
  height: 70px; /* ارتفاع مناسب للزر */
}

.default-btn,
.hover-btn {
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center; /* ✅ تمركز المحتوى */
  gap: 15px;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  width: 100%; /* ✅ يغطي كامل الزر */
  height: 100%; /* ✅ يغطي كامل الزر */
  text-align: center;
}

.hover-btn {
  position: absolute;
  inset: 0;
  background-color: hsl(255deg 50% 49%);
  transform: translate(0%, 100%);
}

.default-btn span {
  color: hsl(0, 0%, 100%);
  padding: 15px 30px;
}

.hover-btn span {
  color: hsl(50deg 100% 50%);
}

button:hover .default-btn {
  transform: translate(0%, -100%);
}

button:hover .hover-btn {
  transform: translate(0%, 0%);
}

`;

export default Button;
