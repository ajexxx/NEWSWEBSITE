import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Mynews.module.css';

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Outlet } from 'react-router-dom';


const Mynews = () => {

  const [news, setnews] = useState([]);
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=867deab2113748d99f2bc00472bc58b2")
      .then((res) => res.json())
      .then((json) => {
        setnews(json.articles)
        console.log(news)
      })

  }, [])

 

  return(
  <div className={styles.Mynews} data-testid="Mynews">
     {news.map((mynews) => (
        <div>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={mynews.urlToImage} />
            <Card.Body>
              <Card.Title>{mynews.title}</Card.Title>
              <Card.Text>
                {mynews.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{mynews.content}</ListGroup.Item>
              <ListGroup.Item>{mynews.publishedAt}</ListGroup.Item>
              <ListGroup.Item>{mynews. author}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href={mynews.url}>Card Link</Card.Link>
              <Card.Link href={mynews.url}>Another Link</Card.Link>
            </Card.Body>
          </Card>
          <Outlet/>
        </div>
      ))}
  </div>
);
};

Mynews.propTypes = {};

Mynews.defaultProps = {};

export default Mynews;