import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { posts } from './posts';
import './App.css';

const App = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const filteredPosts = posts.filter((post) => post.published);

  return (
    <Container className="mt-5">
      <h1 className="carousel-title">
        I pallavolisti che hanno fatto la storia di questo sport
      </h1>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {filteredPosts.map((post) => (
          <Carousel.Item key={post.id}>
            <div className="d-flex justify-content-center align-items-center carousel-item">
              <img className="d-block" src={post.image} alt={post.title} />
            </div>
            <Carousel.Caption>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default App;
