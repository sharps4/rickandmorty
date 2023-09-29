import React from 'react';
import {useParams} from 'react-router-dom';
import Api from '../components/Api';

function Episodes({episodes}) {
  const params = useParams();
  const [list, setList] = React.useState(null);
  let id = [];
  for (let i of episodes) {id.push(i.slice(i.lastIndexOf('/')+1));}
  React.useEffect(() => Api.getMultiplesEpisodes(id, setList));
  if (list) {
    return (
      <ul className='episode-list'>
        {list.map((episode) => <li key={episode.id}>{episode.episode} - {episode.name} - {episode.air_date}</li>)}
      </ul>
    );
  }
  return null;
}

export default Episodes;