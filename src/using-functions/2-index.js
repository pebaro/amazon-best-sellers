import React from 'react'
import ReactDOM from 'react-dom/client'

import {books} from './books.js'
import './index.css'

const EventsDemo = () => {
  const handleFormSubmission = e => {
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <section className='full-width'>
      <form className='test-form' onSubmit={handleFormSubmission}>
        <h2>Dummy Form</h2>
        <input 
          type='text'
          name='textInputField'
          onChange={e => console.log(e.target.value)}
        />
        {/* <button onClick={() => alert('Button Clicked')}>Click Me</button> */}
        <button type='submit'>Submit</button>
        <button type='reset'>Reset</button>
      </form>
    </section>
  )
}

const Book = ({img, alt, title, author}) => {
  return (
    <article className='book'>
      <img src={img} alt={alt} title={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>              
    </article>
  )
}

const Booklist = () => {
  return (
    <>
      <EventsDemo />
      <section className='booklist'>
        {
          books.map(
            book => <Book {...book} key={book.id} />
          )
        }
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
