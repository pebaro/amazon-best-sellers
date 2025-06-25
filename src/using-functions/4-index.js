import React from 'react'
import ReactDOM from 'react-dom/client'

import {books} from './books.js'
import './index.css'

const Book = ({id, img, alt, title, author, displayTheID, getBook}) => {
  return (
    <article className='book'>
      <img src={img} alt={alt} title={title} />
      <h2>{title}</h2>
      <button onClick={() => displayTheID(id, title)}>Click Me</button>
      <button onClick={() => getBook(id)}>Log Details</button><br/><br/>
      <h4>{author}</h4>              
    </article>
  )
}

const Booklist = () => {
  const displayTheID = (id, title) => alert(`
    the ID: ${id}
    the book: ${title}
  `)

  const getBook = id => {
    const book = books.find( book => book.id === id )
    console.log(book)
  }

  return (
      <section className='booklist'>
        {
          books.map(
            book => <Book {...book} key={book.id} 
                      displayTheID={displayTheID} 
                      getBook={getBook} 
                    />
          )
        }
      </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
