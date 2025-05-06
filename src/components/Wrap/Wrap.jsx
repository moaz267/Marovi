import React from 'react';
import Add from '../Add/Add';
const Card = ({src,title,price}) => {
  return (
    <div className="cont">
      <div className="card">
        <div className="im"><img src={src} alt="" /></div>
        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__description">{price}</p>
        </div>
        <div className="add"><Add /></div>
      </div>
    </div>
  );
}
export default Card;
