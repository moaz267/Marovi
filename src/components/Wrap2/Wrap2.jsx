import React from 'react';
import Add from '../Add/Add';
const Card = ({src,title,price}) => {
  return (
    <div className="cont2">
      <div className="card2">
        <div className="im2"><img src={src} alt="" /></div>
        <div className="card__content2">
          <p className="card__title2">{title}</p>
          <p className="card__description2">{price}</p>
        </div>
        <div className="add"><Add /></div>
      </div>
    </div>
  );
}
export default Card;
