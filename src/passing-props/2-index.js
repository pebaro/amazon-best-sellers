import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const titles = {
  book1: 'The Exile',
  book2: 'The Wrong Sister',
  book3: 'The Profiler',
  book4: 'Angel Maker',
  book5: 'The Boy From Block 66',
  book6: 'Traitors Legacy'
}
const authors = {
  author1: 'Morgan Greene',
  author2: 'Claire Doughlas',
  author3: 'Helen Fields',
  author4: 'Morgan Greene',
  author5: 'Limor Regev',
  author6: 'S J Paris'
}
const images = {
  img1: './images/the-exile.jpg',
  img2: './images/the-wrong-sister.jpg',
  img3: './images/the-profiler.jpg',
  img4: './images/angel-maker.jpg',
  img5: './images/the-boy-from-block-66.jpg',
  img6: './images/traitors-legacy.jpg'
}

const Book = ({src, alt, title, author, children}) => {
  return (
    <article className='book'>
      <img src={src} alt={alt} title={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

// with code like Booklist below I should be using a FOR or FOREACH loop instead of manually iterating the Book component and the prop numbers
const Booklist = () => {
  return (
    <section className='booklist'>
      <Book title={titles.book1} author={authors.author1} src={images.img1} alt={titles.book1} >
       <p><strong>Price: £5.99</strong></p>
        <p>Testing out a different style of CSS</p>
      </Book>
      <Book title={titles.book2} author={authors.author2} src={images.img2} alt={titles.book2} />
      <Book title={titles.book3} author={authors.author3} src={images.img3} alt={titles.book3} />
      <Book title={titles.book4} author={authors.author4} src={images.img4} alt={titles.book4} />
      <Book title={titles.book5} author={authors.author5} src={images.img5} alt={titles.book5} />
      <Book title={titles.book6} author={authors.author6} src={images.img6} alt={titles.book6} />
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
