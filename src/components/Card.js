import React from 'react';

import CardFlip from 'react-card-flip';

import syles from '../styles/styles';
import BackCard from '../images/gray_back.png'

const Card = (props) => {
    const { index, id, img, turned, onClickCard } = props;
    
    const { cardImage } = syles();

    return (
        <CardFlip isFlipped={turned} flipDirection="horizontal">
            {/* Front card */}
            <img className={cardImage} alt={id} src={BackCard} onClick={onClickCard(index, id)} />
            {/* Back card */}
            <img className={cardImage} alt={id} src={img} />
        </CardFlip>
    );
}

export default Card;