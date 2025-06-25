import React from 'react'
import ReactDOM from 'react-dom/client'

import {books} from './books.js'
import './index.css'

const Book = ({image_src, alt, title, author, index}) => {
  return (
    <article className='book'>
        <span className='index'># {index + 1}</span>
      <img src={image_src} alt={alt} title={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>              
    </article>
  )
}

const Booklist = () => {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        {
          books.map(
            (book, index) => <Book index={index} {...book} key={book.id} />
          )
        }
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
