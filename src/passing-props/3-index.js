import React from 'react'
import ReactDOM from 'react-dom/client'

import {books} from '../books.js'

import './index.css'

const Booklist = () => {
  return (
    <section className='booklist'>
      {
        books.map(
          // using the index property is fine for testing
          // not usually a good production method as it can cause problems if data is changed....

          // ({img, alt, title, author}, index) => {

          ({id, img, alt, title, author}) => {
            return (
              <article className='book' key={id}>
                <img src={img} alt={alt} title={title} />
                <h2>{title}</h2>
                <h4>{author}</h4>              
              </article>
            )
          }
        )
      }
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
