import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Api from '../components/Api';
import Card from '../components/Card';
import Episodes from '../components/Episodes';
import Background from '../assets/background.png';

function Single() {
  const params = useParams();
  const [character, setCharacter] = React.useState(null);
  React.useEffect(() => Api.getSingleCharacter(params.id, setCharacter));
  if (character) {
    return (
      <>
        <img className='background' src={Background}/>
        <Header/>
        <main>
          <div className='content'>
            <Card infos={character}/>
            <p className='title'>Episodes :</p>
            <Episodes episodes={character.episode}/>
          </div>
        </main>
        <Footer/>
      </>
    );
  }
  else {return null;}
}

export default Single;