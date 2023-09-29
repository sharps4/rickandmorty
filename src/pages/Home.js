import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardList from '../components/CardList';
import Background from '../assets/background.png';

function Home() {
  const [page, setPage] = React.useState(1);
  const handlePreviousPage = () => {
    if (page > 1) {setPage(page-1);}
  };
  const handleNextPage = () => {
    if (page < 42) {setPage(page+1);}
  };
  return (
    <>
      <img className='background' src={Background}/>
      <Header/>
      <main>
        <div className='content'>
          <CardList page={page}/>
          <div className='page-selector'>
            <button onClick={handlePreviousPage}><FontAwesomeIcon icon="fa-solid fa-chevron-left"/></button>
            <span>Page {page}</span>
            <button onClick={handleNextPage}><FontAwesomeIcon icon="fa-solid fa-chevron-right"/></button>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Home;