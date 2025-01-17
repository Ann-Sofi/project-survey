import React, {useState} from 'react'


import FavoriteBook from './Components/FavoriteBook';
import HowManyBooks from './Components/HowManyBooks';
import FavoriteGenre from './Components/FavoriteGenre';
import Header from './Components/Header';
import Summary from './Components/Summary';

import './index.css'



export const App = () => {

  //function for submit button
  const handleSubmit = (event) => {

    event.preventDefault()
    if (isSurveyComplete())
    {
      setDisplaySummary(true)
    }
    else{
      //if survey isn't complete, it will alert and scroll to top.
      alert("Survey not complete");
      window.scroll(0,0);
    }
  }

  const [number, setNumber] = useState("");
  const [favoriteGenre, setFavoriteGenre] = useState("")
  const [book, setBook] = useState("");
  const [displaySummary, setDisplaySummary] = useState(false);

  const onNumberChange = (event) => {
    setNumber(event.target.value)
  }

  const onGenreChange = (event) => {
    setFavoriteGenre(event.target.value)
  }

  const onBookChange = (event) => {
    setBook(event.target.value);
  }

  const isSurveyComplete =() => {
    if (number === '') {
      return false
    }
    if (favoriteGenre === ''){
      return false
    }
    if (book === ''){
      return false
    }
    return true
  }


  return (

    <div >
      {!displaySummary ? ( // if displaySummary is false

        <div className="main-container">
          <Header />

          <div className='formContainer'>
          <form onSubmit={handleSubmit}>
          <section className="many" id="many">
            <HowManyBooks
              text="How many books do you read in a year?"
              number={number}
              onNumberChange={onNumberChange}
            />
          </section>

          <section className="genre" id="genre">
            <FavoriteGenre
              text="Your favorite genre:"
              favoriteGenre={favoriteGenre}
              onGenreChange={onGenreChange}
            />
          </section>

          <section className="favorite" id="favorite">
            <FavoriteBook
              text="Your favorite book is:"
              book={book}
              onBookChange={onBookChange}
            />
          </section>

          </form>
        </div>
      </div>

    ):( // else if displaySummary is true
         <section className="summary" id="summary">
         <Summary
            textHeader="Thank you for your time!"
            numberOfBooks={number}
            favGenre={favoriteGenre}
            favBook={book}
            />
         </section>
    )}

    </div>
  )
}
