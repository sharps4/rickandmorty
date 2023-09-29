import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Card({infos}) {
  let cross = infos.status == 'Dead' ? <FontAwesomeIcon icon="fa-solid fa-cross"/> : null;
  return (
    <article>
        <img src={infos.image}/>
        <p>
          {cross}
          <span>{infos.name}</span>
        </p>
        <p>
          <FontAwesomeIcon icon="fa-solid fa-location-dot"/>
          <span>{infos.location.name}</span>
        </p>
    </article>
  );
}

export default Card;