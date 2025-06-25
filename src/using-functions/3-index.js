import React from 'react'
import ReactDOM from 'react-dom/client'

import {books} from './books.js'
import './index.css'

const Book = ({img, alt, title, author}) => {
  const displayTitle = () => console.log(title)

  return (
    <article className='book'>
      <img src={img} alt={alt} title={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>Display Title</button>
      <h4>{author}</h4>              
    </article>
  )
}

const Booklist = () => {
  return (
      <section className='booklist'>
        {
          books.map(
            book => <Book {...book} key={book.id} />
          )
        }
      </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
