import React from 'react';
import { Router, Link } from 'react-router-dom';
import Api from './Api';
import Card from './Card';

export default function CardList({page}) {
  const [list, setList] = React.useState(null);
  React.useEffect(() => Api.getAllCharacters(page, setList));
  if (list) {
    const cards = list.results.map((character) => <li key={character.id}><Link to={'/details/'+character.id}><Card infos={character}/></Link></li>);
    return <ul className='card-list'>{cards}</ul>;
  }
  else {return null;}
}